import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Button, CircularProgress, Grid, Typography } from '@mui/material';

import { authState } from '../../modules/auth/lib/state';
import { roomState } from '../../modules/room/lib/state';

import type { NextPage } from "next";
type Action = "join" | "create";

const Room: NextPage = () => {
  const { query } = useRouter();
  const { user } = authState();
  const { push } = useRouter();
  const { room } = roomState();

  useEffect(() => {
    if (!user) {
      push("/");
    }
  }, []);

  return !user || !room ? (
    <CircularProgress />
  ) : (
    <Grid container direction="column" padding="1rem 0" spacing={4}>
      <Grid item container>
        <Grid item>
          <Typography variant="h1" fontSize="1.5rem">
            {room.name}
          </Typography>
        </Grid>
        <Grid item container alignItems="center">
          <Typography variant="h3" fontSize="1rem">
            {room.id}
          </Typography>
          <Button variant="text">copy</Button>
        </Grid>
      </Grid>
      <Grid item container direction="column">
        <Button variant="contained">Stats</Button>
      </Grid>
    </Grid>
  );
};

export default Room;
