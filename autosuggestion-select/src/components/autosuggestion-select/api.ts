import { A, pipe } from "@mobily/ts-belt";
import { andThen, getUniquesItemsByProp } from "../../helpers";
import { get } from "../../lib/fetch";
import { createUniversity } from "./domains/university";

type UniversityResponse = {
  web_pages: string[];
  name: string;
  "state-province": null;
  domains: string[];
  alpha_two_code: "PL";
  country: "Poland";
};

type UniversitiesResponse = UniversityResponse[];

//TODO: test
export const API_UNI_FETCH_URL = (query: string) =>
  `http://universities.hipolabs.com/search?country=poland&name=${query}`;

export const getUniversities = (query: string) =>
  get<UniversitiesResponse>(API_UNI_FETCH_URL(query));

export const getQueriedUniversities = (query: string) =>
  pipe(
    query,
    getUniversities,
    andThen(A.map(({ name }) => createUniversity(name))),
    andThen((universities) => getUniquesItemsByProp(universities)("name"))
  );
