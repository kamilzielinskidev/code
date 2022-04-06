describe("For put method", () => {
  describe("For action close", () => {
    describe("When there is no survey in db for given id", () => {
      it.todo("should response with status 404 and message 'NO_SURVEY'");
    });

    describe("When there is a survey in db for given id", () => {
      describe("When the survey isOpen false", () => {
        it.todo("should response with status 403 and message 'FORBIDDEN'");
      });
      describe("When the survey isOpen true", () => {
        it.todo("should set the survey's isOpen false");
        it.todo("should set the survey's assigned room survey_isOpen to false");
      });
    });
  });
});
