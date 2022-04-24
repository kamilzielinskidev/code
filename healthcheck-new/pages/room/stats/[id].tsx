import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { mean, pluck } from 'ramda';
import { useEffect } from 'react';

import { pipe } from '@mobily/ts-belt';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HealingIcon from '@mui/icons-material/Healing';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import {
    CircularProgress, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Typography
} from '@mui/material';

import { authState } from '../../../modules/auth/lib/state';
import { SurveysSchema } from '../../../modules/db/lib/schemas';
import { useQueryRoom } from '../../../modules/room/lib/hooks/useQueryRoom';
import { useQuerySurveysList } from '../../../modules/room/lib/hooks/useQuerySurveysList';

const getAvgOf = (survey: SurveysSchema, field: "FUN" | "HEALTH_OF_CODEBASE") =>
  pipe(survey.responses_answers, pluck(field), mean);

const getResponses = (survey: SurveysSchema) => ({
  FUN: getAvgOf(survey, "FUN"),
  HEALTH_OF_CODEBASE: getAvgOf(survey, "HEALTH_OF_CODEBASE"),
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
      <Grid item>
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
                </TableRow>
              </TableHead>
              <TableBody>
                {surveysList.map((survey) => (
                  <TableRow key={survey.iteration}>
                    <TableCell>{survey.iteration}</TableCell>
                    <TableCell>{getResponses(survey)["FUN"]}</TableCell>
                    <TableCell>{getResponses(survey)["HEALTH_OF_CODEBASE"]}</TableCell>
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
