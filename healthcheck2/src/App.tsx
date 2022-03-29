import { FC, useEffect } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';

import { O, pipe } from '@mobily/ts-belt';
import { Container } from '@mui/material';

import { AppRouting } from './AppRouting';
import { LOCAL_STORAGE_USER_KEY } from './constants';
import { User } from './domain/User';
import { useAppState } from './state';

type LocalStorageUser = null | User;

export const App: FC = () => {
    const localStorageUser =
        useReadLocalStorage<LocalStorageUser>(LOCAL_STORAGE_USER_KEY);
    const { setUser } = useAppState();

    useEffect(() => {
        pipe(localStorageUser, O.fromNullable, O.tap(setUser));
    }, []);

    return (
        <Container maxWidth="sm">
            <AppRouting />
        </Container>
    );
};
