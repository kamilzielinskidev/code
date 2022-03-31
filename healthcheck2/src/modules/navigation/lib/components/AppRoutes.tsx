import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { routes } from '../routing/routes';

export const AppRoutes: FC = () => (
    <BrowserRouter>
        <Routes>
            {routes.map(({ path, component: Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
        </Routes>
    </BrowserRouter>
);
