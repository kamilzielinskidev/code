import axios from 'axios';
import { WithId } from 'mongodb';
import { useQuery } from 'react-query';

import { RoomsSchema } from '../../../db/lib/schemas';

export const useQueryRoom = (roomid: string) =>
  useQuery(
    "room",
    () =>
      axios
        .get<WithId<RoomsSchema>>(`/api/rooms/${roomid}`)
        .catch((err) => {
          throw err.response.data.msg;
        })
        .then((res) => res.data),
    {
      enabled: false,
    }
  );
