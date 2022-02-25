import { FC } from "react";

import { backendUrl } from "../../../../../common/backendUrl";
import { Hero } from "../../../model";

export const SingleHero: FC<Hero> = (hero) => (
  <div className="bg-primary-background p-4">
    <div className="flex">
      <div>
        <img
          className="w-9 h-9"
          src={`${backendUrl}${hero.avatarUrl}`}
          alt={hero.type}
        />
      </div>
      <div className="ml-6">
        <div className="font-bold">{hero.name}</div>
        <div>{hero.type}</div>
      </div>
    </div>
    <div>{hero.description}</div>
  </div>
);
