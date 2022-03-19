import { HeaderWithBack } from "../components/HeaderWithBack";
import { Button } from "@mui/material";

import type { NextPage } from "next";
import Link from "next/link";

const Room: NextPage = () => (
  <div>
    <HeaderWithBack title={`room: ${"some team name"}`} />
    <Link href="/survey" passHref>
      <Button className="mt-4" variant="contained">
        Create voting
      </Button>
    </Link>
    <Button className="mt-4" variant="contained" disabled>
      Close current voting
    </Button>
    <Button className="mt-4" variant="contained" disabled>
      Join voting
    </Button>
    <Button className="mt-4" variant="contained">
      Check history
    </Button>
  </div>
);

export default Room;
