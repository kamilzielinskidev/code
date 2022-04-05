describe("For get method", () => {
  describe("With no given roomid parameter", () => {
    it.todo("should response with status 400 and message 'BAD_REQUEST'");
  });

  describe("With given roomid parameter", () => {
    describe("With no surveys with given roomId in database", () => {
      it.todo("should response with empty list");
    });

    describe("With surveys with given roomId in database", () => {
      it.todo("should response with surveys matching roomId with the given roomid parameter");
    });
  });
});

describe("For post method", () => {
  describe("In body", () => {
    describe("There is no roomId property", () => {
      it.todo("should response with status 400 and message 'BAD_REQUEST'");
    });

    describe("There is roomId property", () => {
      describe("There is no room with given roomId", () => {
        it.todo("should response with status 404 and message 'NO_ROOM'");
      });

      describe("There is a room with given roomId", () => {
        describe("There is already survey open for the room", () => {
          it.todo("should response with status 403 and message 'FORBIDDEN'");
        });

        describe("There is no survey open for the room", () => {
          describe("When there is no survey created yet", () => {
            it.todo("should create a survey with iteration 0 and isOpen true");
            it.todo("should set the room survey_iteration to 0 and survey_isOpen to true");
          });

          describe("When there is/are survey/s created already", () => {
            it.todo("should create a survey with iteration +1 to the current newest survey and isOpen true");
            it.todo("should set the room survey_iteration to the survey's iteration and survey_isOpen to true");
          });
        });
      });
    });
  });
});
