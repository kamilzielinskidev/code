describe("On Room page", () => {
  describe("When there is no user in app store", () => {
    it.todo("should navigate to Home page");
  });
  describe("When there is a user in app store", () => {
    it.todo("should render room name");
    it.todo("should render room id and copy room id button");
    it.todo("should render stats button");

    describe("When there is no survey open", () => {
      it.todo("should render enabled create a survey button");
      it.todo("should render disabled join survey button");
      it.todo("should render disabled close survey button");
    });
    describe("When there is a survey open", () => {
      it.todo("should render disabled create a survey button");
      it.todo("should render enabled join survey button");
      it.todo("should render enabled close survey button");
    });
  });
});

describe("Copy roomid button when clicked", () => {
  it.todo("should put roomid in users clipboard");
});

describe("Stats button", () => {
  it.todo("should navigate to stats with roomid as param");
});

describe("Create a survey button when clicked", () => {
  it.todo("should send request for creating a survey");

  describe("When backend response with error", () => {
    it.todo("should popup notification about the error");
  });

  describe("When backend response with ok", () => {
    it.todo("should popup notification about ok");
    it.todo("should disable the button and enable join a survey button and close survey button");
  });
});

describe("Join a survey button is clicked", () => {
  it.todo("should navigate to response page");
});

describe("Close a survey button is clicked", () => {
  it.todo("should send request for closing the survey");

  describe("When backend response with error", () => {
    it.todo("should popup notification about the error");
  });

  describe("When backend response with ok", () => {
    it.todo("should popup notification about ok");
    it.todo("should disable the button and join a survey button and enable create a survey button");
  });
});
