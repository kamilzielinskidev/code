import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BoltIcon from '@mui/icons-material/Bolt';
import DiamondIcon from '@mui/icons-material/Diamond';
import ExtensionIcon from '@mui/icons-material/Extension';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import HealingIcon from '@mui/icons-material/Healing';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { Button, CircularProgress, Grid, IconButton, Rating, Typography } from '@mui/material';

import { authState } from '../../modules/auth/lib/state';
import { ResponsesSchema } from '../../modules/db/lib/schemas';
import { useQueryRoom } from '../../modules/room/lib/hooks/useQueryRoom';

const CATEGORIES = [
  "FUN",
  "HEALTH_OF_CODEBASE",
  "DELIVERING_VALUE",
  "EASY_TO_RELEASE",
  "LEARNING",
  "MISSION",
  "PAWN_OR_PLAYERS",
  "SPEED",
  "SUITABLE_PROCESS",
  "SUPPORT",
  "TEAMWORK",
] as const;

const categoryToIcon = {
  FUN: VideogameAssetIcon,
  HEALTH_OF_CODEBASE: HealingIcon,
  DELIVERING_VALUE: DiamondIcon,
  EASY_TO_RELEASE: RocketLaunchIcon,
  LEARNING: MenuBookIcon,
  MISSION: TrackChangesIcon,
  PAWN_OR_PLAYERS: ExtensionIcon,
  SPEED: BoltIcon,
  SUITABLE_PROCESS: SettingsIcon,
  SUPPORT: SupportAgentIcon,
  TEAMWORK: GroupAddIcon,
};

const Survey: NextPage = () => {
  const { query, push, back } = useRouter();
  const { user } = authState();
  const FUN_RATE = useState(1);
  const HEALTH_OF_CODEBASE_RATE = useState(1);
  const DELIVERING_VALUE_RATE = useState(1);
  const EASY_TO_RELEASE_RATE = useState(1);
  const LEARNING_RATE = useState(1);
  const MISSION_RATE = useState(1);
  const PAWN_OR_PLAYERS_RATE = useState(1);
  const SPEED_RATE = useState(1);
  const SUITABLE_PROCESS_RATE = useState(1);
  const SUPPORT_RATE = useState(1);
  const TEAMWORK_RATE = useState(1);
  const { data: room } = useQueryRoom(query.id as string);

  const { mutate: answer } = useMutation<ResponsesSchema>("response", () =>
    axios
      .post(`/api/responses`, {
        surveyId: query.id,
        username: user!.name,
        answers: {
          FUN: FUN_RATE[0],
          HEALTH_OF_CODEBASE: HEALTH_OF_CODEBASE_RATE[0],
          DELIVERING_VALUE: DELIVERING_VALUE_RATE[0],
          EASY_TO_RELEASE: EASY_TO_RELEASE_RATE[0],
          LEARNING: LEARNING_RATE[0],
          MISSION: MISSION_RATE[0],
          PAWN_OR_PLAYERS: PAWN_OR_PLAYERS_RATE[0],
          SPEED: SPEED_RATE[0],
          SUITABLE_PROCESS: SUITABLE_PROCESS_RATE[0],
          SUPPORT: SUPPORT_RATE[0],
          TEAMWORK: TEAMWORK_RATE[0],
        },
      })
      .catch((err) => {
        throw err.response.data.msg;
      })
      .then((res) => res.data)
  );

  const categoryToState = {
    FUN: FUN_RATE,
    HEALTH_OF_CODEBASE: HEALTH_OF_CODEBASE_RATE,
    DELIVERING_VALUE: DELIVERING_VALUE_RATE,
    EASY_TO_RELEASE: EASY_TO_RELEASE_RATE,
    LEARNING: LEARNING_RATE,
    MISSION: MISSION_RATE,
    PAWN_OR_PLAYERS: PAWN_OR_PLAYERS_RATE,
    SPEED: SPEED_RATE,
    SUITABLE_PROCESS: SUITABLE_PROCESS_RATE,
    SUPPORT: SUPPORT_RATE,
    TEAMWORK: TEAMWORK_RATE,
  };

  useEffect(() => {
    if (!user) {
      push("/");
    }
  }, []);

  return !user || !room ? (
    <CircularProgress />
  ) : (
    <Grid container>
      <Grid item container direction="column" padding="1rem 0">
        <IconButton sx={{ alignSelf: "self-start" }} onClick={back}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h1" fontSize="1.5rem">
          {room.name}
        </Typography>
        <Typography variant="h3" fontSize="1rem">
          {room._id.toString()}.
        </Typography>
      </Grid>
      <Grid item container direction="column">
        {CATEGORIES.map((category) => {
          const Icon = categoryToIcon[category];
          return (
            <Grid key={category} container alignItems="center" justifyContent="space-between" wrap="nowrap">
              <Grid item container wrap="nowrap">
                <Icon fontSize="large" />
                <Typography fontSize="1.5rem" variant="body1">
                  {category}
                </Typography>
              </Grid>
              <Rating
                size="large"
                value={categoryToState[category][0]}
                max={3}
                onChange={(_, newValue) => {
                  categoryToState[category][1](newValue!);
                }}
              />
            </Grid>
          );
        })}
      </Grid>
      <Button
        sx={{ mt: "1rem" }}
        variant="contained"
        onClick={() => {
          answer();
          back();
        }}
      >
        Submit
      </Button>
    </Grid>
  );
};

export default Survey;
