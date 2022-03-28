import { O } from '@mobily/ts-belt';

import { initialUserLoad } from './service';

it("should read user from browser storage and save it to the app state if there is one", () => {
  const EXAMPLE_USER = { name: "kamil" };
  const mockReadUserFromBrowserStorageFn = jest.fn();
  const mockSaveToAppStateFn = jest.fn();

  mockReadUserFromBrowserStorageFn.mockReturnValueOnce(O.Some(EXAMPLE_USER));

  const userLoad = initialUserLoad(
    mockReadUserFromBrowserStorageFn,
    mockSaveToAppStateFn
  );

  userLoad();

  expect(mockReadUserFromBrowserStorageFn).toHaveReturnedWith(
    O.Some(EXAMPLE_USER)
  );
  expect(mockSaveToAppStateFn).toHaveBeenCalledWith(O.Some(EXAMPLE_USER));
});

it("should read user from browser storage and do nothing about it if there is none", () => {
  const mockReadUserFromBrowserStorageFn = jest.fn();
  const mockSaveToAppStateFn = jest.fn();

  mockReadUserFromBrowserStorageFn.mockReturnValueOnce(O.None);

  const userLoad = initialUserLoad(
    mockReadUserFromBrowserStorageFn,
    mockSaveToAppStateFn
  );

  userLoad();

  expect(mockReadUserFromBrowserStorageFn).toHaveReturnedWith(O.None);
  expect(mockSaveToAppStateFn).not.toHaveBeenCalled();
});
