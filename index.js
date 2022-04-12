const teamBuilder = require("./src/generateCards");
const teamCards = require("./src/generateCards");
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");


//todo set a require generate html file

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
const questions = [
  {
    type: "list",
    message: "Which employee profile type would you like to create?",
    choices: ["Engineer", "Intern", "Manager"],
    name: "employeeTitle",
  },
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your employee ID?",
    name: "iD",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your office number?",
    name: "officeNumber",
    when: (answers) => {
      if (answers.employeeTitle === "Manager") {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "gitHub",
    when: (answers) => {
      if (answers.employeeTitle === "Engineer") {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "What school are you attending?",
    name: "school",
    when: (answers) => {
      if (answers.employeeTitle === "Intern") {
        return true;
      }
    },
  },
  {
    type: "list",
    message: "Would you like to add another employee?",
    choices: ["Yes", "No"],
    name: "option",
  },

];





function init() {
  inquirer.prompt(questions).then((answers) => {
    switch (answers.positionTitle) {
      case "Manager":
        employeeArray = new Manager(
          answers.name,
          answers.iD,
          answers.email,
          answers.officeNumber
        )
        break;
      case "Engineer":
        employeeArray = new Engineer(
          answers.name,
          answers.iD,
          answers.email,
          answers.gitHub
        )
        break;
      case "Intern":
        employeeArray = new Intern(
          answers.name,
          answers.iD,
          answers.email,
          answers.School
        )
        break;
      default:
        break;
    }

    if (answers.option == "Yes") {
      init()
    } 
    // fix whatever is making this make new html file
    fs.writeFileSync("index.html", teamBuilder(answers), (err) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log("Success!");
      }
    });
  });
}

init();
