import { NextPage } from 'next';
import { useRouter } from 'next/router';

const RoomStats: NextPage = () => {
  const { query } = useRouter();
  return <div>{query.id}</div>;
};

export default RoomStats;
