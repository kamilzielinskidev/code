import Link from "next/link";
import React from "react";
import { BsArrowRightSquare, BsPlusSquare } from "react-icons/bs";

import { O } from "@mobily/ts-belt";
import { Button, Paper, Typography } from "@mui/material";

import { UsernameInput } from "../modules/auth/lib/components/UsernameInput";
import { useAuthState } from "../modules/auth/lib/useAuthState";
import { useGetUserFromLocalStorage } from "../modules/auth/lib/useGetUserFromLocalStorage";

import type { NextPage } from "next";
const Home: NextPage = () => {
  const { user } = useAuthState();

  useGetUserFromLocalStorage();

  return (
    <div>
      <Typography variant="overline">healthcheck</Typography>
      <Typography variant="h3">Handling teams health status</Typography>
      <Paper elevation={3} className="p-4 mt-4">
        <UsernameInput />
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
