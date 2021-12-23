import { Button } from "antd";
import { format } from "date-fns";
import { FC } from "react";
import { AiOutlineHeart } from "react-icons/ai";

import { BlogPost as BP } from "../model";

export const BlogPost: FC<BP> = (post) => (
  <div className="flex flex-col">
    <h3 className="font-mono text-lg font-bold mb-0">{post.title}</h3>
    <div className="flex gap-x-3 items-center">
      <Button
        className="border-0"
        icon={<AiOutlineHeart size={"100%"} />}
        size="middle"
      />
      <span className="text-sm">{format(post.date, "MMM dd")}</span>
    </div>
    <div className="mt-2">{post.content}</div>
  </div>
);
