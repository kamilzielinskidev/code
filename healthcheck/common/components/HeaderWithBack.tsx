import { useRouter } from "next/router";
import { FC } from "react";
import { BsBoxArrowInLeft } from "react-icons/bs";

import { IconButton } from "@mui/material";

export const HeaderWithBack: FC<{ title: string }> = ({ title }) => {
  const router = useRouter();

  return (
    <div className="flex items-center">
      <IconButton aria-label="delete" onClick={router.back}>
        <BsBoxArrowInLeft />
      </IconButton>
      <h1 className="text-text">{title}</h1>
    </div>
  );
};
