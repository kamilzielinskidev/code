import { fireEvent, render, screen } from '@testing-library/react';

import { App } from '../../../app/lib/components/App';

describe("App renders", () => {
    it("should render / path", () => {
        window.location.pathname = "/";
        render(<App />);
        const route = window.location.pathname;
        expect(route).toBe("/");
    });
});

describe("Home page renders and user inputs username", () => {
    describe("And clicks create room", () => {
        it.todo("should change go to /create route");
        it.todo("should render create a room text that is on create page");
    });
});
