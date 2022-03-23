import { useRouter } from "next/router";
import { FC } from "react";
import { BsBoxArrowInLeft } from "react-icons/bs";

import { IconButton, Typography } from "@mui/material";

export const HeaderWithBack: FC = ({ children }) => {
  const router = useRouter();

  return (
    <div className="flex items-center">
      <IconButton aria-label="delete" onClick={router.back}>
        <BsBoxArrowInLeft />
      </IconButton>
      <Typography variant="h4">{children}</Typography>
    </div>
  );
};
