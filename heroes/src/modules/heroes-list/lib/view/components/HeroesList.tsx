import { Spin } from "antd";
import { FC } from "react";

import { useGetHeroesList } from "../../hooks/useGetHeroesList";
import { useHeroesList } from "../../hooks/useHeroesList";

export const HeroesList: FC = () => {
  useGetHeroesList();
  const { isError, isLoading, heroesList } = useHeroesList();

  if (isLoading) return <Spin />;
  if (isError) return <h1>error</h1>;
  return (
    <div>
      {heroesList.map((a) => (
        <div key={a.id}>{a.name}</div>
      ))}
    </div>
  );
};
