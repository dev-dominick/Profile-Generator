//manager card
const cardManager = function (manager) {
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