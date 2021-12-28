import type { NextPage } from "next";
import "react-typist/dist/Typist.css";

import Faker from "faker";
import { AiOutlineMenu } from "react-icons/ai";

import { useLocalStorage } from "../common/state/useLocalStorage";
import { TestComp } from "../common/TestComp";
import { TestInputComp } from "../common/TestInputComp";
import { BlogPost } from "../modules/blog/components/BlogPost";
import { BlogPost as BP } from "../modules/blog/model";
import { NavigationMenu } from "../modules/navigation/components/NavigationMenu";
import { BasicSpeedDial } from "../modules/ui/components/ContextDial";
import { ContextAction } from "../modules/ui/models";

const MOCKPOSTS = Array(3)
  .fill(null)
  .map(
    (): BP => ({
      id: Faker.datatype.uuid(),
      date: Faker.date.recent(3),
      title: Faker.hacker.phrase(),
      author: "kamilzielinskidev",
      content: Faker.lorem.paragraphs(10),
      likesAmount: Faker.datatype.number(100),
      tags: Array(5).fill(null).map(Faker.hacker.phrase),
      commentsAmount: Faker.datatype.number(10),
    })
  );

const actions: ContextAction[] = [
  {
    name: "menu",
    icon: AiOutlineMenu,
    action: () => {},
  },
];

const Blog: NextPage = () => {
  const [isMenuOpen] = useLocalStorage<boolean>("isMenuOpen");
  const [isSomethingElse] = useLocalStorage<string>("isSomethingElse");
  return (
    <NavigationMenu>
      <BasicSpeedDial actions={actions}>
        <main>
          <div className="text-2xl">{JSON.stringify(isMenuOpen)}</div>
          <div className="text-2xl">{isSomethingElse}</div>

          <TestComp />
          <TestInputComp />
          {/* TODO: move to BlogPostS component */}
          <div className="flex flex-col px-6 py-10 gap-y-9">
            {MOCKPOSTS.map((post) => (
              <BlogPost key={post.id} {...post} />
            ))}
          </div>
        </main>
      </BasicSpeedDial>
    </NavigationMenu>
  );
};

export default Blog;
