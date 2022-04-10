//requiring employee constructor
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, iD, email, school) {
    super(name, iD, email);

    this.school = school;
  }

  getSchool() {return this.school;}

  getRole() {return "Intern";}
}

module.exports = Intern;
