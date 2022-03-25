import { useRouter } from "next/router";
import { useState } from "react";

import { pipe } from "@mobily/ts-belt";
import { Button, Paper } from "@mui/material";

import { HeaderWithBack } from "../common/components/HeaderWithBack";
import { Input } from "../common/components/Input";

import type { NextPage } from "next";

const Join: NextPage = () => {
  const [roomName, setRoomName] = useState("");
  const { push } = useRouter();

  const pushToRoom = () => push(`/room/${roomName}`);

  return (
    <div className="py-4">
      <HeaderWithBack>join a room:</HeaderWithBack>
      <Paper elevation={3} className="p-4 mt-4">
        <Input
          label="Room name"
          className="flex justify-center"
          value={roomName}
          onChange={(v) => pipe(v.target.value, setRoomName)}
        />
        <Button
          className="mt-4"
          variant="contained"
          onClick={pushToRoom}
          disabled={!roomName}
        >
          Join
        </Button>
      </Paper>
    </div>
  );
};

export default Join;
