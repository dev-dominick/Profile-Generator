const Intern = require("../lib/Intern.js");

test("testing intern school parameter", () => {
  const intern = new Intern("joe", "1", "joe@test.net", "Upenn");
  expect(intern.getSchool()).toBe("Upenn");
});