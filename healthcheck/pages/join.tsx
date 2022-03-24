import { useRouter } from "next/router";
import { useState } from "react";
import { useBoolean } from "usehooks-ts";

import { F, pipe, R } from "@mobily/ts-belt";
import { Button, LinearProgress, Paper } from "@mui/material";

import { HeaderWithBack } from "../common/components/HeaderWithBack";
import { Input } from "../common/components/Input";
import { useAlert } from "../modules/alert/lib/useAlert";
import { joinARoomRequest } from "../modules/room-connection/api";

import type { NextPage } from "next";

const Join: NextPage = () => {
  const { value: isLoading, toggle: toggleIsLoading } = useBoolean(false);
  const [roomName, setRoomName] = useState("");
  const { successAlert, errorAlert } = useAlert();
  const { push } = useRouter();

  const pushToRoom = () => push("/room");

  return (
    <div className="py-4">
      <HeaderWithBack>join a room:</HeaderWithBack>
      {isLoading ? (
        <LinearProgress className="mt-4" />
      ) : (
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
            onClick={() =>
              pipe(
                roomName,
                F.tap(toggleIsLoading),
                joinARoomRequest,
                R.tapError(toggleIsLoading),
                R.tapError((err) => errorAlert(err.message)),
                R.tap((request) =>
                  request
                    .then((response) =>
                      pipe(
                        response,
                        R.tapError((err) => errorAlert(err.message)),
                        R.tap((res) => successAlert(res.message)),
                        R.tap(pushToRoom)
                      )
                    )
                    .finally(F.tap(toggleIsLoading))
                )
              )
            }
            disabled={!roomName}
          >
            Join
          </Button>
        </Paper>
      )}
    </div>
  );
};

export default Join;
