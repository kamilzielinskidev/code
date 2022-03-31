import { fireEvent, render, screen } from '@testing-library/react';

import { App } from '../../../app/lib/components/App';

const MOCK_LOCAL_STORAGE_USER = { name: "kamil" };
const getUsernameInput = () => screen.getAllByLabelText<HTMLInputElement>("Username")[0];
const getLocalStorageItemUser = () => localStorage.getItem("user");

describe("In localstorage", () => {
    afterEach(() => localStorage.clear());

    describe("There is no user saved and Home page renders", () => {
        it("should render empty value input", () => {
            render(<App />);

            expect(getUsernameInput()).toHaveValue("");
        });
    });

    describe(`There is a user ${JSON.stringify(MOCK_LOCAL_STORAGE_USER)} saved and Home page renders`, () => {
        it('should fill the username input with "kamil" value', () => {
            localStorage.setItem("user", JSON.stringify(MOCK_LOCAL_STORAGE_USER));

            render(<App />);

            expect(getUsernameInput()).toHaveValue("kamil");
        });
    });
});

describe("Home page renders and user input in Username", () => {
    beforeEach(() => render(<App />));

    describe('"kamil" value and then empty value', () => {
        it("should save user null to localstorage", () => {
            fireEvent.change(getUsernameInput(), { target: { value: "kamil" } });
            fireEvent.change(getUsernameInput(), { target: { value: "" } });

            expect(getLocalStorageItemUser()).toBeNull();
        });
    });
    describe('"kamil" value', () => {
        it(`should save user ${JSON.stringify(MOCK_LOCAL_STORAGE_USER)} to localstorage`, () => {
            fireEvent.change(getUsernameInput(), {
                target: { value: "kamil" },
            });

            expect(getLocalStorageItemUser()).toBe(JSON.stringify(MOCK_LOCAL_STORAGE_USER));
        });
    });
});
