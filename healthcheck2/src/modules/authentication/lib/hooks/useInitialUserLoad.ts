import { useEffect } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';

import { AuthenticationUser } from '../../domain';
import { initialUserLoad } from '../../service';
import { useAuthenticationState } from './useAuthenticationState';

export const useInitialUserLoad = () => {
  const user = useReadLocalStorage<AuthenticationUser>("user");
  const { setUser } = useAuthenticationState();

  useEffect(
    initialUserLoad(() => user, setUser),
    []
  );
};
