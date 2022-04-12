const Employee = require("../lib/Employee.js");

test("testing employee parameters", () => {
  const employee = new Employee("dom", "1", "dom@test.net");
  expect(employee.getName()).toBe("dom");
});
