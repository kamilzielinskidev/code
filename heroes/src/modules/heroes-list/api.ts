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

type HeroesListAPIError = {
  message: string;
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
  get<HeroesListAPIError, HeroesListAPIResponse>(
    "http://localhost:3000/heroes"
  ).then((response) => {
    if (response.status === "ERROR")
      return { ...response, data: response.data.message };
    else
      return {
        ...response,
        data: mapHeroesListResponseToHeroesList(response.data),
      };
  });
