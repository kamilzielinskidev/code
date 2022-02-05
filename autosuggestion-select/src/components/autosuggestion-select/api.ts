import { pipe } from "@mobily/ts-belt";

import { andThen, map } from "../../helpers";
import { get } from "../../lib/fetch";
import { API_UNI_FETCH_URL } from "./constants";
import { universityResponseToUniversity } from "./helpers";
import { UniversityResponse } from "./models";

export type UniversitiesResponse = UniversityResponse[];

// TODO: test
export const fetchUniversities = (query: string) =>
  pipe(
    get<UniversitiesResponse>(API_UNI_FETCH_URL(query)),
    andThen(map(universityResponseToUniversity))
  );
