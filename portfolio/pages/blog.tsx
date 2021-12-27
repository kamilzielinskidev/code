import type { NextPage } from "next";
import "react-typist/dist/Typist.css";

import Faker from "faker";
import { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { BlogPost } from "../modules/blog/components/BlogPost";
import { BlogPost as BP } from "../modules/blog/model";
import { BasicSpeedDial } from "../modules/navigation/components/ContextDial";
import { NavigationMenu } from "../modules/navigation/components/NavigationMenu";
import { ContextAction } from "../modules/navigation/models";
import { navigationState } from "../modules/navigation/state/state";

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
    action: async () => {
      // TODO: separate this
      navigationState.then((state) => state.toggleIsMenuOpen(true));
    },
  },
];

const Blog: NextPage = () => {
  useEffect(() => {
    navigationState.then((state) => state.isMenuOpen().subscribe(console.log));
  }, []);

  return (
    <NavigationMenu>
      <BasicSpeedDial actions={actions}>
        <button
          onClick={() =>
            navigationState.then((state) =>
              state.isMenuOpen().subscribe(console.log)
            )
          }
        >
          test
        </button>
        <main>
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
