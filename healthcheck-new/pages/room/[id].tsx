import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useCopyToClipboard } from 'usehooks-ts';

import { Button, CircularProgress, Grid, Typography } from '@mui/material';

import { authState } from '../../modules/auth/lib/state';
import { useMutationCloseSurvey } from '../../modules/room/lib/hooks/useMutationCloseSurvey copy';
import { useMutationCreateSurvey } from '../../modules/room/lib/hooks/useMutationCreateSurvey';
import { useQueryRoom } from '../../modules/room/lib/hooks/useQueryRoom';

import type { NextPage } from "next";
const Room: NextPage = () => {
  const { mutate: createSurvey, isSuccess: isCreateSurveySuccess } = useMutationCreateSurvey();
  const { mutate: closeSurvey, isSuccess: isCloseSurveySuccess } = useMutationCloseSurvey();
  const [_, copy] = useCopyToClipboard();
  const { query, push } = useRouter();
  const { user } = authState();
  const { data: room, refetch: refetchRoom } = useQueryRoom(query.id as string);

  useEffect(() => {
    refetchRoom();
  }, [isCreateSurveySuccess, isCloseSurveySuccess]);

  useEffect(() => {
    if (!user) {
      push("/");
    }
  }, []);

  return !user || !room ? (
    <CircularProgress />
  ) : (
    <>
      <Grid container direction="column" padding="1rem 0">
        <Grid item container>
          <Grid item>
            <Typography variant="h1" fontSize="1.5rem">
              {room.name}
            </Typography>
          </Grid>
          <Grid item container alignItems="center">
            <Typography variant="h3" fontSize="1rem">
              {room._id.toString()}
            </Typography>
            <Button variant="text" onClick={() => copy(room._id.toString())}>
              copy
            </Button>
          </Grid>
        </Grid>
        <Grid item container direction="column" gap="1rem">
          <Button variant="contained" disabled={room.survey_isOpen} onClick={() => createSurvey(room._id.toString())}>
            Create a new survey
          </Button>
          <Button variant="contained" disabled={!room.survey_isOpen}>
            Join the survey
          </Button>
          <Button variant="contained" disabled={!room.survey_isOpen} onClick={() => closeSurvey(room.surveyId!)}>
            Close the survey
          </Button>
          <Button variant="contained" onClick={() => push(`./stats/${room._id}`)}>
            Stats
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Room;
