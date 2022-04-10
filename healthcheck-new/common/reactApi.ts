import { ChangeEvent } from 'react';

export const changeValue =
  <A extends string>() =>
  (e: ChangeEvent<HTMLInputElement>) =>
    e.target.value as A;
