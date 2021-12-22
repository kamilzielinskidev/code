import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@fontsource/poppins";
import "@fontsource/poppins/700.css";
import "@fontsource/ibm-plex-mono";
import "antd/dist/antd.variable.min.css";
import { ConfigProvider } from "antd";

import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ConfigProvider.config({
      theme: {
        primaryColor: "red",
      },
    });
  }, []);
  return (
    <div className="w-screen h-screen bg-background">
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
