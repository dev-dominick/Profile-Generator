//Constructor for employee, asks questions to be used in all roles
class Employee {
  constructor(name, iD, email) {
    this.name = name;
    this.iD = iD;
    this.email = email;
  }
  getName(){return this.name}

  getID(){return this.iD}

  getEmail(){return this.email}
  
  getRole(){return "Employee"}
 
}

module.exports = Employee;
