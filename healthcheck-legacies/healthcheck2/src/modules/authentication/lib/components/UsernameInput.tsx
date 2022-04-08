import { ChangeEvent, FC } from 'react';

import { O, pipe, R, S } from '@mobily/ts-belt';
import { TextField } from '@mui/material';

import { getChangeInputValue } from '../../../../common/helpers';
import { clearLocalStorage, fromName, get, toLocalStorage } from '../../services/user';
import { useAuthenticationState } from '../state/useAuthenticationState';

export const UsernameInput: FC = () => {
    const { user, setUser } = useAuthenticationState();

    const setUserNone = () => setUser(O.None);

    const setUserByUsername = (username: string) => pipe(username, fromName, O.Some, setUser);

    const setLocalStorageUserByUsername = (username: string) => pipe(username, fromName, toLocalStorage);

    const username = pipe(
        user,
        O.fromNullable,
        O.match(get("name"), () => "")
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
        pipe(
            e,
            getChangeInputValue,
            R.fromPredicate(S.isNotEmpty, "NO_USER"),
            R.tapError(setUserNone),
            R.tapError(clearLocalStorage),
            R.tap(setUserByUsername),
            R.tap(setLocalStorageUserByUsername)
        );

    return <TextField label="Username" value={username} onChange={handleChange} />;
};
