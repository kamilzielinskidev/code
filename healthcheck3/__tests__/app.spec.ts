describe("For App", () => {
  describe("In localStorage", () => {
    describe("There is no user saved", () => {
      describe("On Home page", () => {
        it.todo("should render empty value username input");
      });
      describe("On any but Home page", () => {
        it.todo("should navigate to Home page");
      });
    });

    describe(`There is a user "kamil" saved`, () => {
      describe("On Home page", () => {
        it.todo('should fill username input with "kamil" value');
      });
    });
  });
});

describe("On Home page", () => {
  describe("Username input", () => {
    describe("Is empty", () => {
      it.todo("should render disabled join button");
      it.todo("should render disabled create button");
    });

    describe("Is filled", () => {
      it.todo("should render non disabled join button");
      it.todo("should render non disabled create button");
    });
  });

  describe("With filled username, user clicks", () => {
    describe("Join button", () => {
      it.todo("should navigate to /join page");
    });
    describe("Create button", () => {
      it.todo("should navigate to /create page");
    });
  });
});
