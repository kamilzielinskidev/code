import { Button } from "@mui/material";
import Link from "next/link";

import { Input } from "../components/Input";

import type { NextPage } from "next";
import { HeaderWithBack } from "../components/HeaderWithBack";
const Create: NextPage = () => {
  return (
    <div>
      <HeaderWithBack title="create a room:" />
      <div>
        <Input label="Room name" />
        <Link href="/room" passHref>
          <Button className="mt-4" variant="contained">
            Create
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Create;
