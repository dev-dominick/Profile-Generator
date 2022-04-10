const Employee = require("./employee");

class Engineer extends Employee {
  constructor(Employee, gitHub) {
    this.Employee = Employee;
    this.gitHub = gitHub;
  }
  getEmployee() {
    return "Employee";
  }
  getGitHub() {
    return this.gitHub;
  }
}

module.exports = Engineer;
