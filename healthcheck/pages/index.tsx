import Link from "next/link";
import { BsArrowRightSquare, BsPlusSquare } from "react-icons/bs";

import { Button } from "@mui/material";

import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <div className="py-20 px-4">
      <div className="flex flex-col items-center">
        <div>
          <Link href="/create" passHref>
            <Button variant="outlined" startIcon={<BsPlusSquare />}>
              Create a room
            </Button>
          </Link>
        </div>
        <div className="mt-4">
          <Link href="/join" passHref>
            <Button variant="contained" startIcon={<BsArrowRightSquare />}>
              Join a room
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
