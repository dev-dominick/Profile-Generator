//requiring employee constructor
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, iD, email, officeNumber) {
    super(name, iD, email);

    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
