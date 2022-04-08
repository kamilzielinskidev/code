import { fireEvent, render, screen } from '@testing-library/react';

import { App } from '../../../app/lib/components/App';

const MOCK_LOCAL_STORAGE_USER = { name: "kamil" };
const getCreateBtn = () => screen.getByText<HTMLButtonElement>("Create");

describe("App renders and in localstorage", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    describe("There is no user saved and Home page renders", () => {
        it("should render disabled create button", () => {
            render(<App />);

            expect(getCreateBtn()).toBeDisabled();
        });
    });

    describe(`There is a user ${JSON.stringify(MOCK_LOCAL_STORAGE_USER)} saved and Home page renders`, () => {
        it("should render not disabled create button", () => {
            localStorage.setItem("user", JSON.stringify(MOCK_LOCAL_STORAGE_USER));

            render(<App />);

            expect(getCreateBtn()).not.toBeDisabled();
        });
    });
});

describe("App renders and user input in Username", () => {
    beforeEach(() => render(<App />));

    const getUsernameInput = () => screen.getAllByLabelText("Username")[0];
    const getCreateARoomTitle = () => screen.getByText<HTMLHeadingElement>("Create a room");

    describe('"kamil" value and then empty value', () => {
        it("should render disabled create button", () => {
            fireEvent.change(getUsernameInput(), { target: { value: "kamil" } });
            fireEvent.change(getUsernameInput(), { target: { value: "" } });

            expect(getCreateBtn()).toBeDisabled();
        });
    });
    describe('"kamil" value', () => {
        it("should render non disabled create button", () => {
            fireEvent.change(getUsernameInput(), { target: { value: "kamil" } });

            expect(getCreateBtn()).not.toBeDisabled();
        });
        describe("And clicks the button", () => {
            it('should change go to /create route and render create page with "Create a room" title', () => {
                fireEvent.change(getUsernameInput(), { target: { value: "kamil" } });

                fireEvent.click(getCreateBtn());

                const route = window.location.pathname;
                expect(route).toBe("/create");

                expect(getCreateARoomTitle()).not.toBeNull();
            });
        });
    });
});
