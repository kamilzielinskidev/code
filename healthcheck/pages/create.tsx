import { LinearProgress, Paper } from "@mui/material";

import { CreateARoomForm } from "../modules/room-connection/components/CreateARoomForm";
import { useCreateARoomState } from "../modules/room-connection/lib/useCreateARoomState";

import type { NextPage } from "next";
import { HeaderWithBack } from "../common/components/HeaderWithBack";
const Create: NextPage = () => {
  const { isLoading } = useCreateARoomState();

  return (
    <div className="py-4">
      <HeaderWithBack>create a room:</HeaderWithBack>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <Paper elevation={3} className="p-4 mt-4">
          <CreateARoomForm />
        </Paper>
      )}
    </div>
  );
};

export default Create;
