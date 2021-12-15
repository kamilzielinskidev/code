import { motion } from "framer-motion";
import { FC } from "react";

const variants = {
  hidden: { opacity: 0, x: -200 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -200 },
};

export const NavigationAnimation: FC = ({ children }) => (
  <motion.div
    variants={variants}
    initial="hidden"
    animate="enter"
    exit="exit"
    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
  >
    {children}
  </motion.div>
);
