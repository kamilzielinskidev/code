import type { NextPage } from "next";
import "react-typist/dist/Typist.css";

import { Button } from "antd";
import { flow } from "fp-ts/lib/function";
import { AiOutlineArrowRight } from "react-icons/ai";
import Typist from "react-typist";

import { preventDefault } from "../common/helpers";
import { useRouter } from "../common/routing/hooks/router";
import { NavigationAnimation } from "../modules/navigation/components/NavigationAnimation";

const Index: NextPage = () => {
  // TODO: get this routering out
  const { goTo } = useRouter();

  return (
    <NavigationAnimation>
      <main className="h-screen flex flex-col items-center justify-center">
        <h1 className="font-mono text-xl">
          <Typist startDelay={500} cursor={{ element: "█" }}>
            kamilzielinskidev
          </Typist>
        </h1>
        <div className="mt-2">
          <Button
            href="/blog"
            onClick={flow(preventDefault, goTo("/blog"))}
            className="p-0"
            icon={<AiOutlineArrowRight size={"100%"} />}
            size="large"
          />
        </div>
      </main>
    </NavigationAnimation>
  );
};

export default Index;
