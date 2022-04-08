import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { O } from '@mobily/ts-belt';
import { Button } from '@mui/material';

import { useAuthenticationState } from '../../../authentication/lib/state/useAuthenticationState';

export const CreateRoomBtn: FC = () => {
    const { user } = useAuthenticationState();
    const navigate = useNavigate();

    const isNoUser = O.isNone(user);

    const navigateToJoinPage = () => navigate("create");

    return (
        <Button variant="outlined" disabled={isNoUser} onClick={navigateToJoinPage}>
            Create
        </Button>
    );
};
