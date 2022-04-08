import { CreatePage } from '../pages/CreatePage';
import { HomePage } from '../pages/HomePage';
import { JoinPage } from '../pages/JoinPage';

export const routes = [
    { path: "/", component: HomePage },
    { path: "/join", component: JoinPage },
    { path: "/create", component: CreatePage },
];
