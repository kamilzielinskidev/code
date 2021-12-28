import { flow } from "fp-ts/lib/function";
import { FC, useState } from "react";
import { ImMagicWand } from "react-icons/im";

import { SpeedDial, SpeedDialAction } from "@mui/material";

import { ContextAction } from "../models";

export const BasicSpeedDial: FC<{
  actions: ContextAction[];
}> = ({ children, actions }) => {
  // TODO: use service worker storage
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {children}
      <SpeedDial
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        classes={{
          fab: `border border-solid ${
            isOpen ? "bg-black" : "bg-white border-black"
          }`,
        }}
        ariaLabel="Context dial"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={<ImMagicWand color={isOpen ? "white" : "black"} />}
        direction="left"
      >
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <SpeedDialAction
              className="bg-white border border-black border-solid"
              key={action.name}
              icon={<Icon />}
              tooltipTitle={action.name}
              onClick={flow(() => {
                setIsOpen(false);
              }, action.action)}
            />
          );
        })}
      </SpeedDial>
    </>
  );
};
