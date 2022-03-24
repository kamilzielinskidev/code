import Link from "next/link";
import React from "react";
import { BsArrowRightSquare, BsPlusSquare } from "react-icons/bs";
import { useLocalStorage } from "usehooks-ts";

import { F, O, pipe } from "@mobily/ts-belt";
import { Button, Paper, Typography } from "@mui/material";

import { Input } from "../common/components/Input";
import { User } from "../modules/auth/domain/user";
import { useAuthState } from "../modules/auth/lib/useAuthState";
import { mapTextToUser, mapUserToText } from "../modules/auth/service";

import type { NextPage } from "next";
const Home: NextPage = () => {
  const { user, setUser } = useAuthState();
  const [_, setUserInLocalStorage] = useLocalStorage<User | null>("user", null);

  return (
    <div>
      <Typography variant="overline">healthcheck</Typography>
      <Typography variant="h3">Handling teams health status</Typography>
      <Paper elevation={3} className="p-4 mt-4">
        <Input
          label="Username"
          value={mapUserToText(user)}
          onChange={(v) =>
            pipe(
              v.target.value,
              mapTextToUser,
              F.tap(setUser),
              F.tap((user) => setUserInLocalStorage(() => user))
            )
          }
        />
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
      </Paper>
    </div>
  );
};

export default Home;
