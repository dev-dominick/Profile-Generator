const Manager = require("../lib/Manager.js");

test("testing manager office number parameter", () => {
  const manager = new Manager("jose", "1", "jose@test.net", "8");
  expect(manager.getOfficeNumber()).toBe("8");
});