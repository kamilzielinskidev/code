import React, { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useReadLocalStorage } from 'usehooks-ts';

import { O, pipe } from '@mobily/ts-belt';
import { Container } from '@mui/material';

import { LOCAL_STORAGE_USER_KEY } from './constants';
import { User } from './domain/User';
import { useAppState } from './state';

const CreateView = React.lazy(() => import("./pages/CreateView"));
const HomeView = React.lazy(() => import("./pages/HomeView"));
const JoinView = React.lazy(() => import("./pages/JoinView"));

const routes = [
    { path: "/", page: HomeView },
    { path: "/join", page: JoinView },
    { path: "/create", page: CreateView },
];

export const AppRouting: FC = () => (
    <Routes>
        {routes.map(({ path, page }) => {
            const Page = page;
            return (
                <Route
                    path={path}
                    element={
                        <React.Suspense fallback={<></>}>
                            <Page />
                        </React.Suspense>
                    }
                />
            );
        })}
    </Routes>
);
