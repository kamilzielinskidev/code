import { render } from '@testing-library/react';

import * as helpers from '../helpers';
import { App } from './App';

it("should call initialUserLoad with readUserFn and saveUserToStateFn on mount", () => {
  const mockInitialUserLoadFn = jest.fn();
  jest.spyOn(helpers, "initialUserLoad").mockReturnValue(mockInitialUserLoadFn);

  render(<App />);
  expect(mockInitialUserLoadFn).toHaveBeenCalled();
});
