import { Button } from "@mui/material";

import { HeaderWithBack } from "../components/HeaderWithBack";
import { Input } from "../components/Input";

import type { NextPage } from "next";
const Join: NextPage = () => (
  <div>
    <HeaderWithBack title="join a room:" />
    <div>
      <Input label="Room name" />
      <Button className="mt-4" fullWidth variant="contained">
        Join
      </Button>
    </div>
  </div>
);

export default Join;
