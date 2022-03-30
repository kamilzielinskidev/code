import { FC } from 'react';

import { O } from '@mobily/ts-belt';
import { Button } from '@mui/material';

import { useAuthenticationState } from '../../../authentication/lib/state/useAuthenticationState';

export const JoinRoomBtn: FC = () => {
    const { user } = useAuthenticationState();

    const isNoUser = O.isNone(user);

    return (
        <Button variant="contained" disabled={isNoUser}>
            Join a room
        </Button>
    );
};
