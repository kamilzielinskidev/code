import { render } from '@testing-library/react';

import * as useInitialUserLoad from '../../../authentication/lib/hooks/useInitialUserLoad';
import { App } from './App';

it("should call useInitialUserLoad", () => {
  const fn = jest.spyOn(useInitialUserLoad, "useInitialUserLoad");

  render(<App />);

  expect(fn).toHaveBeenCalled();
});
