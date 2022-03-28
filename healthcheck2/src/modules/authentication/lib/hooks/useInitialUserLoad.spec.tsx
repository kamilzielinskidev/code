import * as usehooksTs from 'usehooks-ts';

import { renderHook } from '@testing-library/react-hooks';

import * as useAuthenticationState from './useAuthenticationState';
import { useInitialUserLoad } from './useInitialUserLoad';

jest.mock("usehooks-ts", () => ({
  __esModule: true,
  ...jest.requireActual("usehooks-ts"),
}));

const MOCK_USER = { name: "kamil" };

it(`should not call setUser if there is no user returned from localstorage`, () => {
  jest.spyOn(usehooksTs, "useReadLocalStorage").mockReturnValue(undefined);

  const mockSetUserFn = jest.fn();
  jest
    .spyOn(useAuthenticationState, "useAuthenticationState")
    .mockReturnValue({ setUser: mockSetUserFn });

  renderHook(() => useInitialUserLoad());

  expect(mockSetUserFn).not.toHaveBeenCalled();
});

it(`should call setUser with ${MOCK_USER} if there is ${MOCK_USER} user returned from localstorage`, () => {
  jest
    .spyOn(usehooksTs, "useReadLocalStorage")
    .mockReturnValue({ name: "kamil" });

  const mockSetUserFn = jest.fn();
  jest
    .spyOn(useAuthenticationState, "useAuthenticationState")
    .mockReturnValue({ setUser: mockSetUserFn });

  renderHook(() => useInitialUserLoad());

  expect(mockSetUserFn).toHaveBeenCalledWith({ name: "kamil" });
});
