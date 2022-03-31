import { O } from '@mobily/ts-belt';

import { User } from '../domain/User';
import { clearLocalStorage, fromLocalStorage, fromName, get, map, toLocalStorage } from './user';

it("should create User DTO from name string", () => {
    expect(fromName("kamil")).toEqual(User({ name: "kamil" }));
});

describe('Given user with name "kamil"', () => {
    const testUser = User({ name: "kamil" });

    it('should map the user to new one with "kamilkamil"', () => {
        expect(map((user) => ({ name: `${user.name}${user.name}` }))(testUser)).toEqual(User({ name: "kamilkamil" }));
    });

    it('should get name prop and return "kamil"', () => {
        expect(get("name")(testUser)).toBe("kamil");
    });
});

describe("In localStorage", () => {
    afterEach(() => localStorage.clear());

    const getLocalStorageItemUser = () => localStorage.getItem("user");

    it("should save user to localStorage", () => {
        toLocalStorage(User({ name: "kamil" }));
        expect(getLocalStorageItemUser()).not.toBeNull();
        expect(JSON.parse(getLocalStorageItemUser()!)).toEqual(User({ name: "kamil" }));
    });

    describe('With user { name: "kamil" }', () => {
        beforeEach(() => localStorage.setItem("user", JSON.stringify({ name: "kamil" })));

        it("should return Some User instance", () => {
            expect(fromLocalStorage()).toEqual(O.Some(User({ name: "kamil" })));
        });

        it("should remove user from local storage", () => {
            clearLocalStorage();
            expect(getLocalStorageItemUser()).toBeNull();
        });
    });

    describe("With no user", () => {
        it("should return None", () => {
            expect(fromLocalStorage()).toEqual(O.None);
        });
    });
});
