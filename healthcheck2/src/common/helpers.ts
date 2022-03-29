import { ChangeEvent } from 'react';

import { D, pipe } from '@mobily/ts-belt';

export const getInputValue = (e: ChangeEvent<HTMLInputElement>) =>
    pipe(e, D.getUnsafe("target"), D.getUnsafe("value"));
