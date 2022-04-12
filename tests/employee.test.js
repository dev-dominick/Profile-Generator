const Employee = require("../lib/Employee");

test("user inputs id", () => {
  const iD = 12;
  const worker = new Employee(iD);
  expect(worker.iD).toBe(iD)
})

