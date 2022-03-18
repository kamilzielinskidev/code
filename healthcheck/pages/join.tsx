import Link from "next/link";

import { Button } from "@mui/material";

import { HeaderWithBack } from "../components/HeaderWithBack";
import { Input } from "../components/Input";

import type { NextPage } from "next";
const Join: NextPage = () => (
  <div>
    <HeaderWithBack title="join a room:" />
    <div>
      <Input label="Room name" />
      <Link href="/room" passHref>
        <Button className="mt-4" variant="contained">
          Join
        </Button>
      </Link>
    </div>
  </div>
);

export default Join;
