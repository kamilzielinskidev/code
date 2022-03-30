import { FC, useEffect } from 'react';

import { O, pipe } from '@mobily/ts-belt';

import { UsernameInput } from '../../../authentication/lib/components/UsernameInput';
import { useAuthenticationState } from '../../../authentication/lib/state/useAuthenticationState';
import { fromLocalStorage } from '../../../authentication/services/user';
import { JoinRoomBtn } from '../../../navigation/lib/components/JoinRoomBtn';

export const App: FC = () => {
    const { setUser } = useAuthenticationState();

    useEffect(() => {
        pipe(fromLocalStorage(), O.tap(setUser));
    }, []);

    return (
        <div className="py-2 flex flex-col">
            <UsernameInput />
            <JoinRoomBtn />
        </div>
    );
};
