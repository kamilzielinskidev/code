import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HealingIcon from '@mui/icons-material/Healing';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { Button, CircularProgress, Grid, IconButton, Rating, Typography } from '@mui/material';

import { authState } from '../../modules/auth/lib/state';
import { ResponsesSchema } from '../../modules/db/lib/schemas';
import { useQueryRoom } from '../../modules/room/lib/hooks/useQueryRoom';

const CATEGORIES = ["FUN", "HEALTH_OF_CODEBASE"] as const;

const categoryToIcon = {
  FUN: VideogameAssetIcon,
  HEALTH_OF_CODEBASE: HealingIcon,
};

const Survey: NextPage = () => {
  const { query, push, back } = useRouter();
  const { user } = authState();
  const funRate = useState(1);
  const healthOfCodebaseRate = useState(1);
  const { data: room } = useQueryRoom(query.id as string);

  const { mutate: answer } = useMutation<ResponsesSchema>("response", () =>
    axios
      .post(`/api/responses`, {
        surveyId: query.id,
        username: user!.name,
        answers: {
          FUN: funRate[0],
          HEALTH_OF_CODEBASE: healthOfCodebaseRate[0],
        },
      })
      .catch((err) => {
        throw err.response.data.msg;
      })
      .then((res) => res.data)
  );

  const categoryToState = { FUN: funRate, HEALTH_OF_CODEBASE: healthOfCodebaseRate };

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
