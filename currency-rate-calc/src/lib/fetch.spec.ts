import { AxiosResponse } from "axios";
import { andThenPluckData } from "./fetch";

describe("Given success ajax response", () => {
  const axiosResponse = Promise.resolve({ data: "test123" } as AxiosResponse);
  it("should pluck data property", () => {
    expect(andThenPluckData(axiosResponse)).resolves.toBe("test123");
  });
});
