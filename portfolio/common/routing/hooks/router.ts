import { useRouter as useNextRouter } from "next/router";
import { goTo } from "../helpers";

export const useRouter = () => {
  const nextRouter = useNextRouter();

  return {
    goTo: goTo(nextRouter.push),
  };
};
