import axios from 'axios';
import { WithId } from 'mongodb';
import { useRouter } from 'next/router';
import * as R_ from 'ramda';
import { useEffect, useMemo, useState } from 'react';
import { useMutation } from 'react-query';
import { useLocalStorage } from 'usehooks-ts';

import { F, O, pipe, R } from '@mobily/ts-belt';
import { Button, FormControlLabel, Grid, Radio, TextField, Typography } from '@mui/material';

import { User } from '../common/domain';
import { changeValue } from '../common/reactApi';
import { authState } from '../modules/auth/lib/state';
import * as Auth from '../modules/auth/service';
import { RoomsSchema } from '../modules/db/lib/schemas';
import { useQueryRoom } from '../modules/room/lib/hooks/useQueryRoom';
import { roomState } from '../modules/room/lib/state';

import type { NextPage } from "next";
type Action = "join" | "create";

const Home: NextPage = () => {
  const [action, setAction] = useState<Action>("join");
  const [roomid, setRoomid] = useState("");
  const [roomname, setRoomName] = useState("");

  const { user, setUser } = authState();
  const { setRoom } = roomState();
  const router = useRouter();

  const [_, setLocalStorageUser] = useLocalStorage<User | null>("user", null);

  const { data: room, refetch: getRoom, isSuccess } = useQueryRoom(roomid);

  useEffect(() => {
    room && router.push(`room/${room._id}`);
  }, [isSuccess]);

  const createRoom = useMutation<WithId<RoomsSchema>, string, string>(
    "room",
    (name) =>
      axios
        .post(`/api/rooms`, { name })
        .catch((err) => {
          throw err.response.data.msg;
        })
        .then((res) => res.data),
    {
      onSuccess: (room) => {
        router.push(`room/${room._id}`);
      },
    }
  );

  const radioChange = R_.pipe(changeValue<Action>(), setAction);

  const username = useMemo(
    () =>
      pipe(
        user,
        O.fromNullable,
        O.match(Auth.get("name"), () => "")
      ),
    [user]
  );

  const changeUsername = (name: string) =>
    pipe(
      name,
      R.fromPredicate((name) => name !== "", {}),
      R.tapError(() => setUser(null)),
      R.tapError(() => setLocalStorageUser(null)),
      R.tap((username) => {
        pipe(username, Auth.ofName, F.tap(setUser), F.tap(setLocalStorageUser));
      })
    );

  const isValid = useMemo(() => {
    if (user === null) return false;
    if (action === "join" && roomid === "") return false;
    if (action === "create" && roomname === "") return false;
    return true;
  }, [action, roomid, roomname, user]);

  return (
    <Grid container padding="1rem 0" direction="column" spacing={4}>
      <Grid item>
        <Typography variant="h1" fontSize={"1.5rem"}>
          healthcheck
        </Typography>
      </Grid>
      <Grid item>
        <TextField
          placeholder="username"
          fullWidth
          value={username}
          onChange={R_.pipe(changeValue(), changeUsername)}
        />
      </Grid>
      <Grid item container>
        <Grid item container direction="column">
          <FormControlLabel
            control={<Radio value={"join" as Action} checked={action === "join"} onChange={radioChange} />}
            label="Join a room"
          />
          <TextField
            label="Room id"
            placeholder="624864727bc948b873z67152"
            disabled={action === "create"}
            value={roomid}
            onChange={R_.pipe(changeValue(), setRoomid)}
          />
        </Grid>
        <Grid item container direction="column">
          <FormControlLabel
            control={<Radio value={"create" as Action} checked={action === "create"} onChange={radioChange} />}
            label="Create a room"
          />
          <TextField
            label="Room name"
            placeholder="cool room name"
            disabled={action === "join"}
            value={roomname}
            onChange={R_.pipe(changeValue(), setRoomName)}
          />
        </Grid>
      </Grid>
      <Grid item container>
        <Button
          variant="contained"
          fullWidth
          disabled={!isValid}
          onClick={() => (action === "join" ? getRoom() : createRoom.mutate(roomname))}
        >
          Go
        </Button>
      </Grid>
    </Grid>
  );
};

export default Home;
