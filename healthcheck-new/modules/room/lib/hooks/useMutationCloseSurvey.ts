import axios from 'axios';
import { useMutation } from 'react-query';

import { SurveysSchema } from '../../../db/lib/schemas';

export const useMutationCloseSurvey = () =>
  useMutation<SurveysSchema, string, string>("survey", (surveyId) =>
    axios
      .put(`/api/surveys/${surveyId}/close`)
      .catch((err) => {
        throw err.response.data.msg;
      })
      .then((res) => res.data)
  );
