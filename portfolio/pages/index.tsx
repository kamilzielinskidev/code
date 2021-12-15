import type { NextPage } from "next";
import { AiOutlineArrowRight } from "react-icons/ai";

import { BlinkingBlock } from "../common/components/BlinkingBlock";
import { IconButton } from "../common/components/IconButton";
import { NavigationAnimation } from "../modules/navigation/components/NavigationAnimation";

const Home: NextPage = () => {
  return (
    <NavigationAnimation>
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-primary text-2xl font-sans">
          Kamil Zieliński
          <BlinkingBlock />
        </h1>
        <div className="mt-8">
          <IconButton>
            <AiOutlineArrowRight className="text-primary" size={"2rem"} />
          </IconButton>
        </div>
      </div>
    </NavigationAnimation>
  );
};

export default Home;
