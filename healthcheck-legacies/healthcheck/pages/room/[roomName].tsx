import Link from "next/link";
import { useRouter } from "next/router";

import { Button, Paper } from "@mui/material";

import type { NextPage } from "next";
const Room: NextPage = () => {
  const { query } = useRouter();
  const roomName = query["roomName"];

  return (
    <div className="py-4">
      <Paper elevation={3} className="p-4 mt-4">
        <Button className="mt-4" variant="contained">
          Create voting
        </Button>
        <Button className="mt-4" variant="contained" disabled>
          Close current voting
        </Button>
        <Button className="mt-4" variant="contained" disabled>
          Join voting
        </Button>
        <Link href="/stats" passHref>
          <Button className="mt-4" variant="contained">
            Check stats
          </Button>
        </Link>
      </Paper>
    </div>
  );
};

export default Room;
