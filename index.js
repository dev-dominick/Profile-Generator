const generateCards = require('./src/generateCards');
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const employeeArray = [];

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
    type: "list",
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
  }



];

// answers = managerAnswers => {
//     const { name, iD, email, officeNumber} = managerAnswers;
//     const manager = new Manager (name, iD, email, officeNumber);

//     employeeArray.push(manager);
//     console.log(manager);
//   }



function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
//fix whatever is making this make new html file
    fs.writeFileSync("index.html", generateCards(answers), (err) => {
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



