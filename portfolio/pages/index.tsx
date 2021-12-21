import type { NextPage } from "next";
import "react-typist/dist/Typist.css";

import { Button } from "antd";
import { AiOutlineArrowRight } from "react-icons/ai";
import Typist from "react-typist";

import { NavigationAnimation } from "../modules/navigation/components/NavigationAnimation";

const Home: NextPage = () => {
  return (
    <NavigationAnimation>
      <main className="h-screen flex flex-col items-center justify-center">
        <h1 className="font-mono">
          <Typist startDelay={500} cursor={{ element: "█" }}>
            kamilzielinskidev
          </Typist>
        </h1>
        <div className="mt-8">
          <Button icon={<AiOutlineArrowRight size={"100%"} />} size="large" />
        </div>
      </main>
    </NavigationAnimation>
  );
};

export default Home;
