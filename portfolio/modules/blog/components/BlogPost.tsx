import { Button, Divider } from "antd";
import { format } from "date-fns";
import { FC } from "react";
import { AiOutlineComment, AiOutlineHeart } from "react-icons/ai";

import { BlogPost as BP } from "../model";

export const BlogPost: FC<BP> = (post) => (
  <div className="flex flex-col font-sans">
    <h3 className="font-mono text-2xl font-bold mb-0">{post.title}</h3>
    <div className="mt-9 flex gap-x-3 items-center justify-between text-sm">
      <div className="flex gap-x-3">
        <span className="font-bold">{post.author}</span>
        <span>{format(post.date, "MMM dd")}</span>
      </div>
      <div className="flex gap-x-3">
        <div className="flex items-center gap-x-1">
          <Button
            className="border-0"
            icon={<AiOutlineHeart size={"100%"} />}
            size="middle"
          />
          <span>{post.likesAmount}</span>
        </div>
        <div className="flex items-center gap-x-1">
          <Button
            className="border-0"
            icon={<AiOutlineComment size={"100%"} />}
            size="middle"
          />
          <span>{post.commentsAmount}</span>
        </div>
      </div>
    </div>
    <Divider className="border-t-gray-700 m-0 mt-3" />
    <div className="mt-7 leading-6 text-justify">{post.content}</div>
  </div>
);
