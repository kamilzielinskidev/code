import axios from 'axios';
import { WithId } from 'mongodb';
import { useQuery } from 'react-query';

import { SurveysSchema } from '../../../db/lib/schemas';

export const useQuerySurveysList = (roomid: string | undefined) =>
  useQuery(
    "surveysList",
    () =>
      axios
        .get<WithId<SurveysSchema>[]>(`/api/surveys?roomid=${roomid}`)
        .catch((err) => {
          throw err.response.data.msg;
        })
        .then((res) => res.data),
    { enabled: !!roomid }
  );
