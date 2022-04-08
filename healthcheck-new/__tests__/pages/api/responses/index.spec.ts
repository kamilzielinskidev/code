describe("For post method", () => {
  describe("When the body structure is invalid", () => {
    it.todo("should response with status 400 and message 'BAD_REQUEST'");
  });
  describe("When the body structure is valid", () => {
    describe("When there is already a response for the survey for the user", () => {
      it.todo("should response with status 403 and message 'FORBIDDEN'");
    });
    describe("When the survey isOpen false", () => {
      it.todo("should response with status 403 and message 'FORBIDDEN'");
    });
    describe("When there is no survey for the surveyId", () => {
      it.todo("should response with status 404 and message 'NOT_FOUND'");
    });
    describe("When the user did not respond for the survey yet", () => {
      it.todo("should create response with answers, username and surveyId");
      it.todo("should for the given survey, push the answers to responses_answers array");
    });
  });
});
