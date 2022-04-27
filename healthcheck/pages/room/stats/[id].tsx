import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { mean, pluck } from 'ramda';
import { useEffect } from 'react';

import { pipe } from '@mobily/ts-belt';
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
import {
    CircularProgress, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Typography
} from '@mui/material';

import { authState } from '../../../modules/auth/lib/state';
import { SurveysSchema } from '../../../modules/db/lib/schemas';
import { useQueryRoom } from '../../../modules/room/lib/hooks/useQueryRoom';
import { useQuerySurveysList } from '../../../modules/room/lib/hooks/useQuerySurveysList';

const getAvgOf = (
  survey: SurveysSchema,
  field:
    | "FUN"
    | "HEALTH_OF_CODEBASE"
    | "DELIVERING_VALUE"
    | "EASY_TO_RELEASE"
    | "LEARNING"
    | "MISSION"
    | "PAWN_OR_PLAYERS"
    | "SPEED"
    | "SUITABLE_PROCESS"
    | "SUPPORT"
    | "TEAMWORK"
) => pipe(survey.responses_answers, pluck(field), mean);

const getResponses = (survey: SurveysSchema) => ({
  FUN: getAvgOf(survey, "FUN"),
  HEALTH_OF_CODEBASE: getAvgOf(survey, "HEALTH_OF_CODEBASE"),
  DELIVERING_VALUE: getAvgOf(survey, "DELIVERING_VALUE"),
  EASY_TO_RELEASE: getAvgOf(survey, "EASY_TO_RELEASE"),
  LEARNING: getAvgOf(survey, "LEARNING"),
  MISSION: getAvgOf(survey, "MISSION"),
  PAWN_OR_PLAYERS: getAvgOf(survey, "PAWN_OR_PLAYERS"),
  SPEED: getAvgOf(survey, "SPEED"),
  SUITABLE_PROCESS: getAvgOf(survey, "SUITABLE_PROCESS"),
  SUPPORT: getAvgOf(survey, "SUPPORT"),
  TEAMWORK: getAvgOf(survey, "TEAMWORK"),
});

// TODO: move this out so the url structure would be /room/:id/stats
const RoomStats: NextPage = () => {
  const { query, push, back } = useRouter();
  const { user } = authState();
  const { data: room } = useQueryRoom(query.id as string);
  // TODO: not use custom hooks for these
  const { data: surveysList } = useQuerySurveysList(room?._id.toString());

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
          {room._id.toString()}
        </Typography>
      </Grid>
      <Grid item overflow="scroll">
        {surveysList && (
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>iter</TableCell>
                  <TableCell>
                    <VideogameAssetIcon />
                  </TableCell>
                  <TableCell>
                    <HealingIcon />
                  </TableCell>
                  <TableCell>
                    <DiamondIcon />
                  </TableCell>
                  <TableCell>
                    <RocketLaunchIcon />
                  </TableCell>
                  <TableCell>
                    <MenuBookIcon />
                  </TableCell>
                  <TableCell>
                    <TrackChangesIcon />
                  </TableCell>
                  <TableCell>
                    <ExtensionIcon />
                  </TableCell>
                  <TableCell>
                    <BoltIcon />
                  </TableCell>
                  <TableCell>
                    <SettingsIcon />
                  </TableCell>
                  <TableCell>
                    <SupportAgentIcon />
                  </TableCell>
                  <TableCell>
                    <GroupAddIcon />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {surveysList.map((survey) => (
                  <TableRow key={survey.iteration}>
                    <TableCell>{survey.iteration}</TableCell>
                    <TableCell>{getResponses(survey)["FUN"]}</TableCell>
                    <TableCell>{getResponses(survey)["HEALTH_OF_CODEBASE"]}</TableCell>
                    <TableCell>{getResponses(survey)["DELIVERING_VALUE"]}</TableCell>
                    <TableCell>{getResponses(survey)["EASY_TO_RELEASE"]}</TableCell>
                    <TableCell>{getResponses(survey)["LEARNING"]}</TableCell>
                    <TableCell>{getResponses(survey)["MISSION"]}</TableCell>
                    <TableCell>{getResponses(survey)["PAWN_OR_PLAYERS"]}</TableCell>
                    <TableCell>{getResponses(survey)["SPEED"]}</TableCell>
                    <TableCell>{getResponses(survey)["SUITABLE_PROCESS"]}</TableCell>
                    <TableCell>{getResponses(survey)["SUPPORT"]}</TableCell>
                    <TableCell>{getResponses(survey)["TEAMWORK"]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Grid>
    </Grid>
  );
};

export default RoomStats;
