//requiring employee constructor
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, iD, email, gitHub) {
    super (name, iD, email)

    this.gitHub = gitHub;
  }

  getGitHub() {return this.gitHub}

  getRole() {return "Engineer"}

}

module.exports = Engineer;
