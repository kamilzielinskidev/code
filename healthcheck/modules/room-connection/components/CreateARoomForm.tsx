import { FC, useState } from "react";

import { pipe } from "@mobily/ts-belt";
import { Button } from "@mui/material";

import { Input } from "../../../common/components/Input";
import { useCreateARoom } from "../lib/useCreateARoom";

export const CreateARoomForm: FC = () => {
  const { createARoom } = useCreateARoom();
  const [roomName, setRoomName] = useState("");

  return (
    <>
      <Input
        label="Room name"
        className="flex justify-center"
        onChange={(v) => pipe(v.target.value, setRoomName)}
      />
      <Button
        className="mt-4"
        variant="contained"
        onClick={() => createARoom(roomName)}
        disabled={!roomName}
      >
        Create
      </Button>
    </>
  );
};
