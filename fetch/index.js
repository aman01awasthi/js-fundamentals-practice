let users = [];

async function getData() {
    try {
        let data = await fetch(`https://jsonplaceholder.typicode.com/users`);
        let finalData = await data.json();
        users = finalData;
        displayUsers();
        console.log(users);
    } catch (err) {
        console.log("error");
    }
}
getData();

//here function takes html element as parameter
//we will loop through users and get users data one by one
// then display data in a tr
function displayUsers(container) {
  let displayData = document.getElementById("container");
  displayData.textContent= "";

  let table = document.createElement("table");
  table.classList.add('table-responsive');
  table.classList.add('table-bordered');
  
  let thead = document.createElement('thead');
  let thRow = document.createElement('tr');
  let tbody = document.createElement('tbody');
  let thName = document.createElement('th');
  let thEmail = document.createElement('th');
  let thPhone = document.createElement('th');
  let thAddress = document.createElement('th');
  
  thName.textContent="Name";
  thEmail.textContent="Email";
  thPhone.textContent="Phone";
  thAddress.textContent="Address";

  displayData.appendChild(table);
  table.appendChild(thead);
  table.appendChild(tbody);
  thead.appendChild(thRow);
  thRow.appendChild(thName);
  thRow.appendChild(thEmail);
  thRow.appendChild(thPhone);
  thRow.appendChild(thAddress);

  users.forEach((user) => {
    let tdRow = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdEmail = document.createElement("td");
    let tdPhone = document.createElement("td");
    let tdAddress = document.createElement("td");
    tdName.textContent = `${user.name}`;
    tdEmail.textContent = `${user.email}`;
    tdPhone.textContent = `${user.phone}`;
    tdAddress.textContent = `${user.address.street}`;

    tbody.appendChild(tdRow);
    tdRow.appendChild(tdName);
    tdRow.appendChild(tdEmail);
    tdRow.appendChild(tdPhone);
    tdRow.appendChild(tdAddress);
});
}