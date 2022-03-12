import Link from "next/link";
import { BsArrowRightSquare, BsBoxArrowUp, BsPlusSquare } from "react-icons/bs";

import { Button } from "@mui/material";

import { Input } from "../components/Input";

import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <div>
      <h1>healtcheck</h1>
      {/* TODO: autofill previous used username */}
      <Input label="Username" />
      <Link href="/create" passHref>
        <Button
          className="mt-12"
          variant="outlined"
          startIcon={<BsPlusSquare />}
        >
          Create a room
        </Button>
      </Link>
      <Link href="/join" passHref>
        <Button
          className="mt-4"
          variant="contained"
          startIcon={<BsArrowRightSquare />}
        >
          Join a room
        </Button>
      </Link>
      {/*
      TODO: think about join the last room
      <Link href="/join" passHref>
        <Button
          className="mt-4"
          variant="contained"
          fullWidth
          startIcon={<BsBoxArrowUp />}
        >
          Join RR || LOTG room
        </Button>
      </Link> */}
    </div>
  );
};

export default Home;
