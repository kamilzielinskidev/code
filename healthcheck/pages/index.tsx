import Link from "next/link";
import { BsArrowRightSquare, BsPlusSquare } from "react-icons/bs";

import { O, pipe } from "@mobily/ts-belt";
import { Button, Paper, Typography } from "@mui/material";

import { Input } from "../common/components/Input";
import { useAuth } from "../modules/auth/lib/useAuth";
import { useReadUserFromLocalStorage } from "../modules/auth/lib/useReadUserFromLocalStorage";
import { createUser } from "../modules/auth/service";

import type { NextPage } from "next";
import React, { FC } from "react";

const UserInput: FC = () => {
  const { user, setUser } = useAuth();

  return (
    <Input
      label="Username"
      value={O.mapWithDefault(user, "", (user) => user.name)}
      onChange={(v) =>
        pipe(v.target.value, createUser, O.fromNullable, setUser)
      }
    />
  );
};

const Home: NextPage = () => {
  const { user } = useAuth();

  useReadUserFromLocalStorage();

  const CreateRoomBtn = () => (
    <Link href="/create" passHref>
      <Button
        className="mt-12"
        variant="outlined"
        startIcon={<BsPlusSquare />}
        disabled={O.isNone(user)}
      >
        Create a room
      </Button>
    </Link>
  );

  const JoinRoomBtn = () => (
    <Link href="/join" passHref>
      <Button
        className="mt-4"
        variant="contained"
        startIcon={<BsArrowRightSquare />}
        disabled={O.isNone(user)}
      >
        Join a room
      </Button>
    </Link>
  );

  return (
    <div>
      <Typography variant="overline">healthcheck</Typography>
      <Typography variant="h2">Handling teams health status.</Typography>
      <Paper elevation={3}>
        <UserInput />
        <CreateRoomBtn />
        <JoinRoomBtn />
      </Paper>
    </div>
  );
};

export default Home;
