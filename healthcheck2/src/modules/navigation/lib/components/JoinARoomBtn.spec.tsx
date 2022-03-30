import { fireEvent, render, screen } from '@testing-library/react';

import { App } from '../../../app/lib/components/App';

const MOCK_LOCAL_STORAGE_USER = { name: "kamil" };
describe("In localstorage", () => {
    afterEach(() => localStorage.clear());
    describe("There is no user saved and Home page renders", () => {
        it("should render disabled join button", () => {
            render(<App />);
            const joinARoomBtn = screen.getByText<HTMLButtonElement>("Join a room");
            expect(joinARoomBtn).toBeDisabled();
        });
    });

    describe(`There is a user ${JSON.stringify(MOCK_LOCAL_STORAGE_USER)} saved and Home page renders`, () => {
        it("should render not disabled join button", () => {
            localStorage.setItem("user", JSON.stringify(MOCK_LOCAL_STORAGE_USER));
            render(<App />);
            const joinARoomBtn = screen.getByText<HTMLButtonElement>("Join a room");
            expect(joinARoomBtn).not.toBeDisabled();
        });
    });
});

describe("Home page renders and user input in Username", () => {
    describe('"kamil" value and then empty value', () => {
        it("should render disabled join button", () => {
            render(<App />);
            const usernameInput = screen.getAllByLabelText("Username")[0];
            fireEvent.change(usernameInput, { target: { value: "kamil" } });
            fireEvent.change(usernameInput, { target: { value: "" } });
            const joinARoomBtn = screen.getByText<HTMLButtonElement>("Join a room");
            expect(joinARoomBtn).toBeDisabled();
        });
    });
    describe('"kamil" value', () => {
        it("should render non disabled join button", () => {
            render(<App />);
            const usernameInput = screen.getAllByLabelText("Username")[0];
            fireEvent.change(usernameInput, { target: { value: "kamil" } });
            const joinARoomBtn = screen.getByText<HTMLButtonElement>("Join a room");
            expect(joinARoomBtn).not.toBeDisabled();
        });
    });
});
