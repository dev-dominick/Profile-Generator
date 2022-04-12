const Engineer = require("../lib/Engineer.js");

test("testing engineer github parameter", () => {
  const engineer = new Engineer("dom", "1", "dom@test.net", "gitHub");
  expect(engineer.getGitHub()).toBe("gitHub");
});
