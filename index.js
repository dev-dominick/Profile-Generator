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

  // <div class="card" style="width: 18rem;">
  //   <div class="card-body bg-primary">
  //     <h5 class="card-title text-light">Name</h5>
  //     <p class="card-text text-light">Position</p>
  //   </div>
  //   <ul class="list-group list-group-flush">
  //     <li class="list-group-item">employee id</li>
  //     <li class="list-group-item">email</li>
  //     <li class="list-group-item">officenumber, github, school</li>
  //   </ul>
  // </div>


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input


// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address


// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab


// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number


// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team


// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu


// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu


// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated