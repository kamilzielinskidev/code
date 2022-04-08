import '../styles/globals.css';

import * as Ra from 'ramda';
import { ChangeEvent, useEffect, useState } from 'react';

import { O, pipe } from '@mobily/ts-belt';

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const [username, setUsername] = useState("");

  useEffect(() => {
    pipe(localStorage.getItem("user"), O.fromNullable, O.tap(setUsername));
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    pipe(
      e,
      Ra.path<string>(["target", "value"]),
      Ra.tap((v) => setUsername(v!)),
      Ra.tap((v) => localStorage.setItem("user", v!))
    );

  return (
    <>
      {username}
      <input value={username} onChange={handleChange} />
      {/* <Component {...pageProps} /> */}
    </>
  );
}

export default MyApp;
