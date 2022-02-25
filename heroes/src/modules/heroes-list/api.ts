import { backendUrl } from "../../common/backendUrl";
import { get } from "../../lib/fetch";
import { Hero } from "./model";

type HeroesListAPIResponse = {
  data: {
    id: string;
    fullName: string;
    avatarUrl: string;
    description: string;
    typeId: string;
    type: {
      id: string;
      name: string;
    };
  }[];
  totalCount: number;
};

const mapHeroesListResponseToHeroesList = (response: HeroesListAPIResponse) =>
  response.data.map((data) =>
    Hero({
      id: data.id,
      avatarUrl: data.avatarUrl,
      name: data.fullName,
      type: data.type.name,
      description: data.description,
    })
  );

export const getHeroesList = () =>
  get<HeroesListAPIResponse>(`${backendUrl}/heroes`).then(
    mapHeroesListResponseToHeroesList
  );
