import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@fontsource/poppins";

import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-screen h-screen bg-background">
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
