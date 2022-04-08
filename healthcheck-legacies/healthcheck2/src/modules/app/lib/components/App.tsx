import { FC, useEffect } from 'react';

import { O, pipe } from '@mobily/ts-belt';

import { useAuthenticationState } from '../../../authentication/lib/state/useAuthenticationState';
import { fromLocalStorage } from '../../../authentication/services/user';
import { AppRoutes } from '../../../navigation/lib/components/AppRoutes';

export const App: FC = () => {
    const { setUser } = useAuthenticationState();

    useEffect(() => {
        pipe(fromLocalStorage(), O.tap(setUser));
    }, []);

    return <AppRoutes />;
};
