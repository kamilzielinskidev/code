import { O } from '@mobily/ts-belt';

import { User } from '../domain/User';
import { clearLocalStorage, fromLocalStorage, fromName, get, map, toLocalStorage } from './user';

it("should create User DTO from name string", () => {
    expect(fromName("kamil")).toEqual(User({ name: "kamil" }));
});

describe('Given user with name "kamil"', () => {
    it('should map the user to new one with "kamilkamil"', () => {
        const testUser = User({ name: "kamil" });
        expect(map((user) => ({ name: `${user.name}${user.name}` }))(testUser)).toEqual(User({ name: "kamilkamil" }));
    });

    it('should get name prop and return "kamil"', () => {
        const testUser = User({ name: "kamil" });
        expect(get("name")(testUser)).toBe("kamil");
    });
});

describe("In localStorage", () => {
    afterEach(() => localStorage.clear());

    it("should save user to localStorage", () => {
        toLocalStorage(User({ name: "kamil" }));
        const localStorageUser = localStorage.getItem("user");
        expect(localStorageUser).not.toBeNull();
        expect(JSON.parse(localStorageUser!)).toEqual(User({ name: "kamil" }));
    });

    describe('With user { name: "kamil" }', () => {
        it("should return Some User instance", () => {
            localStorage.setItem("user", JSON.stringify({ name: "kamil" }));
            expect(fromLocalStorage()).toEqual(O.Some(User({ name: "kamil" })));
        });

        it("should remove user from local storage", () => {
            localStorage.setItem("user", JSON.stringify({ name: "kamil" }));
            clearLocalStorage();
            const localStorageUser = localStorage.getItem("user");
            expect(localStorageUser).toBeNull();
        });
    });

    describe("With no user", () => {
        it("should return None", () => {
            expect(fromLocalStorage()).toEqual(O.None);
        });
    });
});
