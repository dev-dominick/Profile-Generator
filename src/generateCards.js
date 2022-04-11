//manager card
const cardManager = function (manager) {
  console.log({manager});
  return `  <div class="card" style="width: 18rem;">
    <div class="card-body bg-primary">
      <h5 class="card-title text-light">${manager.name}</h5>
      <p class="card-text text-light">Manager</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.iD}</li>
      <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
      <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
    </ul>
  </div>`;
}

//create function, switch statement for cardManager, cardIntern, cardEngineer

const teamBuilder = (employee) => {
  console.log({employee});
  cardArray = [];
  if (employee.employeeTitle = "Manager") {
    var managerCard = cardManager(employee)
    console.log(cardManager);
  }
  cardArray.push(managerCard);
  console.log(managerCard);
  const buildTeam = generateHTML(managerCard);
  return buildTeam
}

function generateHTML(manager) {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Profile Generator</title>
  <link rel="stylesheet" href="/dist/style.css" />
  <!-- CSS only -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
</head>

<body>
  <nav class="my-navbar navbar navbar-dark bg-danger">
    <div class="container-fluid justify-content-center">
      <span class="navbar-brand mb-0 h1 header ">My Team</span>
    </div>
  </nav>

${manager}





</body>

</html>`;
};

module.exports = teamBuilder;