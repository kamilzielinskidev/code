describe("For post method", () => {
  describe("In body", () => {
    describe("There is no name property", () => {
      it.todo("should response with status 400 and message 'BAD_REQUEST'");
    });
    describe("There is name property", () => {
      it.todo(
        "should create a room with the name, survey_iteration and surveyId set to null, survey_isOpen set to false"
      );
      it.todo("should return the created room");
    });
  });
});
