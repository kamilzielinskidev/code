import { Button } from "@mui/material";

import { Input } from "../components/Input";

import type { NextPage } from "next";
import { HeaderWithBack } from "../components/HeaderWithBack";
const Create: NextPage = () => {
  return (
    <div>
      <HeaderWithBack title="create a room:" />
      <div>
        <Input label="Room name" />
        <Button className="mt-4" fullWidth variant="contained">
          Create
        </Button>
      </div>
    </div>
  );
};

export default Create;
