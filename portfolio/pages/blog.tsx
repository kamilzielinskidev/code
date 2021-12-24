import type { NextPage } from "next";
import "react-typist/dist/Typist.css";

import Faker from "faker";

import { BlogPost } from "../modules/blog/components/BlogPost";
import { BlogPost as BP } from "../modules/blog/model";
import { NavigationAnimation } from "../modules/navigation/components/NavigationAnimation";

const MOCKPOSTS = Array(3)
  .fill(null)
  .map(
    (): BP => ({
      id: Faker.datatype.uuid(),
      date: Faker.date.recent(3),
      title: Faker.hacker.phrase(),
      author: "kamilzielinskidev",
      content: Faker.lorem.paragraphs(10),
      likes: Faker.datatype.number(100),
      tags: Array(5).fill(null).map(Faker.hacker.phrase),
    })
  );

const Blog: NextPage = () => {
  return (
    <NavigationAnimation>
      <main>
        {/* TODO: move to BlogPostS component */}
        <div className="flex flex-col px-6 py-10 gap-y-9">
          {MOCKPOSTS.map((post) => (
            <BlogPost key={post.id} {...post} />
          ))}
        </div>
      </main>
    </NavigationAnimation>
  );
};

export default Blog;
