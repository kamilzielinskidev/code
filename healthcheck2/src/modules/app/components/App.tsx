import './App.css';

import { FC, useEffect } from 'react';

import { O } from '@mobily/ts-belt';

import { initialUserLoad } from '../helpers';
import logo from './logo.svg';

export const App: FC = () => {
  useEffect(
    initialUserLoad(
      () => O.None,
      () => {}
    ),
    []
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
