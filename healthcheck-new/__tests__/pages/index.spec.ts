describe("On Home page", () => {
  it.todo("should render app title");
  it.todo("should render username input");
  it.todo("should render action radio form with join a room option as default");
  it.todo("should render disabled go button");
});

describe("Username input", () => {
  describe("When there is no user in app store", () => {
    it.todo("should be empty");
  });
  describe("When there is a user in app store", () => {
    it.todo("should fill the input with a username");
  });

  describe("When user fills it", () => {
    describe("When the value is empty string", () => {
      it.todo("should delete user from localstorage");
    });

    describe("When the value is not empty string", () => {
      it.todo("should save the user into localstorage");
    });
  });
});

describe("Action form", () => {
  it.todo("should by default select join a room option");
  describe("When join a room is selected", () => {
    it.todo("should disable create a room input");
    it.todo("should render enabled join a room id input");
  });
  describe("When create a room is selected", () => {
    it.todo("should disable join a room input");
    it.todo("should render enabled create a room name input");
  });
});

describe("Go buttom", () => {
  describe("When username is not filled or is empty string or action form is invalid", () => {
    it.todo("should be disabled");
  });
  describe("When username is filled with non empty string and action form is valid", () => {
    it.todo("should be enabled");

    describe("When clicked", () => {
      describe("When there is backend response error", () => {
        it.todo("should popup error notification");
      });
      describe("When there backend response ok", () => {
        it.todo("should  navigate to the room page with roomid as param");
      });
    });
  });
});
