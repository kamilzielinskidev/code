import axios from 'axios';
import { useMutation } from 'react-query';

import { SurveysSchema } from '../../../db/lib/schemas';

export const useMutationCreateSurvey = () =>
  useMutation<SurveysSchema, string, string>("survey", (roomId) =>
    axios
      .post(`/api/surveys?roomid=${roomId}`)
      .catch((err) => {
        throw err.response.data.msg;
      })
      .then((res) => res.data)
  );
