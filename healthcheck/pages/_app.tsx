import "antd/dist/antd.css";

import { AppProps } from "next/app";
import * as React from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
