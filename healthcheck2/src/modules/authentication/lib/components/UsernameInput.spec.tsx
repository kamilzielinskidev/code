import { fireEvent, render, screen } from '@testing-library/react';

import { App } from '../../../app/lib/components/App';

const MOCK_LOCAL_STORAGE_USER = { name: "kamil" };
describe("In localstorage", () => {
    afterEach(() => localStorage.clear());
    describe("There is no user saved and Home page renders", () => {
        it("should render empty value input", () => {
            render(<App />);
            const usernameInput = screen.getAllByLabelText<HTMLInputElement>("Username")[0];
            expect(usernameInput).toHaveValue("");
        });
    });

    describe(`There is a user ${JSON.stringify(MOCK_LOCAL_STORAGE_USER)} saved and Home page renders`, () => {
        it('should fill the username input with "kamil" value', () => {
            localStorage.setItem("user", JSON.stringify(MOCK_LOCAL_STORAGE_USER));
            render(<App />);
            const usernameInput = screen.getAllByLabelText("Username")[0];
            expect(usernameInput).toHaveValue("kamil");
            localStorage.clear();
        });
    });
});

describe("Home page renders and user input in Username", () => {
    describe('"kamil" value and then empty value', () => {
        it("should save user null to localstorage", () => {
            render(<App />);
            const usernameInput = screen.getAllByLabelText("Username")[0];
            fireEvent.change(usernameInput, { target: { value: "kamil" } });
            fireEvent.change(usernameInput, { target: { value: "" } });
            const localStorageUser = localStorage.getItem("user");
            expect(localStorageUser).toBeNull();
        });
    });
    describe('"kamil" value', () => {
        it(`should save user ${JSON.stringify(MOCK_LOCAL_STORAGE_USER)} to localstorage`, () => {
            render(<App />);
            const usernameInput = screen.getAllByLabelText("Username")[0];
            fireEvent.change(usernameInput, {
                target: { value: "kamil" },
            });
            const localStorageUser = localStorage.getItem("user");
            expect(localStorageUser).toBe(JSON.stringify(MOCK_LOCAL_STORAGE_USER));
        });
    });
});
