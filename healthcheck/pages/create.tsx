import Link from "next/link";

import { Button } from "@mui/material";

import { HeaderWithBack } from "../common/components/HeaderWithBack";
import { Input } from "../common/components/Input";

import type { NextPage } from "next";
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
