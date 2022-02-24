import * as fetch from "../../lib/fetch";
import { getHeroesList } from "./api";

const MOCK_RESPNOSE = {
  data: [
    {
      id: "id1",
      fullName: "UFO",
      avatarUrl: "ufo.png",
      description: "description1",
      typeId: "typeid1",
      type: {
        id: "typeid1",
        name: "typeid1",
      },
    },
    {
      id: "id2",
      fullName: "Wrestler",
      avatarUrl: "wrestler.png",
      description: "description2",
      typeId: "typeid2",
      type: {
        id: "typeid2",
        name: "typeid2",
      },
    },
  ],
  totalCount: 2,
};

it("Should return list of heroes if promise resolved", async () => {
  jest.spyOn(fetch, "get").mockResolvedValue(MOCK_RESPNOSE);
  expect(await getHeroesList()).toEqual([
    {
      id: "id1",
      avatarUrl: "ufo.png",
      name: "UFO",
      type: "typeid1",
      description: "description1",
    },
    {
      id: "id2",
      avatarUrl: "wrestler.png",
      name: "Wrestler",
      type: "typeid2",
      description: "description2",
    },
  ]);
});
