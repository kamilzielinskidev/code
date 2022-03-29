import { ChangeEvent, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';

import { O, pipe, R, S } from '@mobily/ts-belt';
import { Button, TextField, Typography } from '@mui/material';

import { getInputValue } from '../common/helpers';
import { LOCAL_STORAGE_USER_KEY } from '../constants';
import { User } from '../domain/User';
import { useAppState } from '../state';

type LocalStorageUser = null | User;

const HomeView: FC = () => {
    const [_, setLocalStorageUser] = useLocalStorage<LocalStorageUser>(
        LOCAL_STORAGE_USER_KEY,
        null
    );

    const { user, setUser } = useAppState();

    const navigate = useNavigate();

    const username = pipe(
        user,
        O.match(
            (user) => user.name,
            () => ""
        )
    );

    const isNoUser = O.isNone(user);

    const navigateToJoin = () => navigate("/join");

    const navigateToCreate = () => navigate("/create");

    const changeUsername = (e: ChangeEvent<HTMLInputElement>) =>
        pipe(
            e,
            getInputValue,
            R.fromPredicate(S.isNotEmpty, ""),
            R.tapError(() => setLocalStorageUser(null)),
            R.tapError(() => setUser(O.None)),
            R.map((name) => User({ name })),
            R.tap(setLocalStorageUser),
            R.tap(setUser)
        );

    return (
        <div className="flex flex-col py-2">
            <Typography variant="h4">Healthcheck</Typography>
            <TextField
                className="mt-8"
                label="Username"
                variant="outlined"
                value={username}
                onChange={changeUsername}
            />
            <Button
                className="mt-8"
                variant="contained"
                disabled={isNoUser}
                onClick={navigateToJoin}
            >
                Join a room
            </Button>
            <Button
                className="mt-2"
                variant="outlined"
                disabled={isNoUser}
                onClick={navigateToCreate}
            >
                Create a room
            </Button>
        </div>
    );
};

export default HomeView;
