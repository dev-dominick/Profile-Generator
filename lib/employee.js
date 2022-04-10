class Employee {
  constructor(name, employeeTitle, iD, email) {
    this.name = name;
    this.employeeTitle = employeeTitle;
    this.iD = iD;
    this.email = email;
  }
  getName(){return this.name}
  getEmployeeTitle(){return this.employeeTitle}
  getID(){return this.iD}
  getEmail(){return this.email}
  getEmployee(){return "Employee"}
 
}

module.exports = Employee;
