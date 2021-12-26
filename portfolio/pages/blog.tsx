import type { NextPage } from "next";
import "react-typist/dist/Typist.css";

import Faker from "faker";
import { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { BlogPost } from "../modules/blog/components/BlogPost";
import { BlogPost as BP } from "../modules/blog/model";
import { BasicSpeedDial } from "../modules/navigation/components/ContextDial";
import { NavigationMenu } from "../modules/navigation/components/NavigationMenu";
// import { Counter } from "../modules/counter";
import { ContextAction } from "../modules/navigation/models";

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
  { name: "menu", icon: AiOutlineMenu, action: () => console.log(123) },
];

const Blog: NextPage = () => {
  useEffect(() => {
    const counter = new Worker(
      new URL("../modules/counter.ts", import.meta.url)
    );

    counter.onmessage = (evt) => alert(`WebWorker Response => ${evt.data}`);

    counter.postMessage("test");
  });
  return (
    <NavigationMenu>
      <BasicSpeedDial actions={actions}>
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
