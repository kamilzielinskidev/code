import type { NextPage } from "next";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -200 },
};

const Home: NextPage = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
      className="h-screen flex items-center justify-center"
    >
      <h1 className="text-primary text-2xl font-sans">hello world</h1>
    </motion.div>
  );
};

export default Home;
