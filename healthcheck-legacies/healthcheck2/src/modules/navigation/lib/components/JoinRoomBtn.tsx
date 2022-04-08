import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { O } from '@mobily/ts-belt';
import { Button } from '@mui/material';

import { useAuthenticationState } from '../../../authentication/lib/state/useAuthenticationState';

export const JoinRoomBtn: FC = () => {
    const { user } = useAuthenticationState();
    const navigate = useNavigate();

    const isNoUser = O.isNone(user);

    const navigateToJoinPage = () => navigate("join");

    return (
        <Button variant="contained" disabled={isNoUser} onClick={navigateToJoinPage}>
            Join
        </Button>
    );
};
