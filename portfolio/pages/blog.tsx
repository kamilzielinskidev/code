import type { NextPage } from "next";
import "react-typist/dist/Typist.css";

import Faker from "faker";

import { BlogPost } from "../modules/blog/components/BlogPost";
import { BlogPost as BP } from "../modules/blog/model";
import { NavigationAnimation } from "../modules/navigation/components/NavigationAnimation";

const MOCKPOSTS: BP[] = Array(3)
  .fill(null)
  .map(() => ({
    id: Faker.datatype.uuid(),
    date: Faker.date.recent(3),
    title: Faker.hacker.phrase(),
    content: Faker.lorem.paragraphs(10),
    likes: Faker.datatype.number(100),
    tags: Array(5).fill(null).map(Faker.hacker.phrase),
  }));

const Blog: NextPage = () => {
  return (
    <NavigationAnimation>
      <main>
        <div className="flex flex-col gap-y-4">
          {MOCKPOSTS.map((post) => (
            <BlogPost key={post.id} {...post} />
          ))}
        </div>
      </main>
    </NavigationAnimation>
  );
};

export default Blog;
