import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@fontsource/poppins";
import "@fontsource/poppins/700.css";
import "@fontsource/ibm-plex-mono";
import "@fontsource/ibm-plex-mono/700.css";
import "antd/dist/antd.variable.min.css";
import { ConfigProvider } from "antd";

import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ConfigProvider.config({
      theme: {
        primaryColor: "black",
      },
    });
  }, []);
  return (
    <div className="w-screen h-screen flex justify-center">
      <AnimatePresence exitBeforeEnter>
        <div className="max-w-2xl">
          <Component {...pageProps} />
        </div>
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
