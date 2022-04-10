import { useRouter } from 'next/router';

import type { NextPage } from "next";
type Action = "join" | "create";

const Room: NextPage = () => {
  const { query } = useRouter();

  return <div>{query.id}</div>;
};

export default Room;
