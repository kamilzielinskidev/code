import { FC } from 'react';

import { UsernameInput } from '../../../authentication/lib/components/UsernameInput';
import { CreateRoomBtn } from '../components/CreateARoomBtn';
import { JoinRoomBtn } from '../components/JoinRoomBtn';

export const HomePage: FC = () => {
    return (
        <div className="py-2 flex flex-col">
            <UsernameInput />
            <JoinRoomBtn />
            <CreateRoomBtn />
        </div>
    );
};
