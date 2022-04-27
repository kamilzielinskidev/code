import '../styles/globals.css';

import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useReadLocalStorage } from 'usehooks-ts';

import { O, pipe } from '@mobily/ts-belt';
import { Container } from '@mui/material';

import { User } from '../common/domain';
import { authState } from '../modules/auth/lib/state';
import * as Auth from '../modules/auth/service';

const queryClient = new QueryClient();

import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  const { setUser, user } = authState();
  const localStorageUser = useReadLocalStorage<User | null>("user");

  useEffect(() => {
    pipe(localStorageUser, O.fromNullable, O.map(Auth.of), O.tap(setUser));
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="xs">
        <Component {...pageProps} />
      </Container>
    </QueryClientProvider>
  );
}

export default MyApp;
