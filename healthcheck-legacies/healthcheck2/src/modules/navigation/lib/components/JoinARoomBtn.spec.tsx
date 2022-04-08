import { fireEvent, render, screen } from '@testing-library/react';

import { App } from '../../../app/lib/components/App';

const MOCK_LOCAL_STORAGE_USER = { name: "kamil" };
const getJoinBtn = () => screen.getByText<HTMLButtonElement>("Join");

describe("App renders and in localstorage", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    describe("There is no user saved and Home page renders", () => {
        it("should render disabled join button", () => {
            render(<App />);

            expect(getJoinBtn()).toBeDisabled();
        });
    });

    describe(`There is a user ${JSON.stringify(MOCK_LOCAL_STORAGE_USER)} saved and Home page renders`, () => {
        it("should render not disabled join button", () => {
            localStorage.setItem("user", JSON.stringify(MOCK_LOCAL_STORAGE_USER));

            render(<App />);

            expect(getJoinBtn()).not.toBeDisabled();
        });
    });
});

describe("App renders and user input in Username", () => {
    beforeEach(() => render(<App />));

    const getUsernameInput = () => screen.getAllByLabelText("Username")[0];
    const getJoinARoomTitle = () => screen.getByText<HTMLHeadingElement>("Join a room");

    describe('"kamil" value and then empty value', () => {
        it("should render disabled join button", () => {
            fireEvent.change(getUsernameInput(), { target: { value: "kamil" } });
            fireEvent.change(getUsernameInput(), { target: { value: "" } });

            expect(getJoinBtn()).toBeDisabled();
        });
    });
    describe('"kamil" value', () => {
        it("should render non disabled join button", () => {
            fireEvent.change(getUsernameInput(), { target: { value: "kamil" } });

            expect(getJoinBtn()).not.toBeDisabled();
        });
        describe("And clicks the button", () => {
            it('should change go to /join route and render join page with "Join a room" title', () => {
                fireEvent.change(getUsernameInput(), { target: { value: "kamil" } });

                fireEvent.click(getJoinBtn());

                const route = window.location.pathname;
                expect(route).toBe("/join");

                expect(getJoinARoomTitle()).not.toBeNull();
            });
        });
    });
});
