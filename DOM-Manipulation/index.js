// Form — name + email, submit without reload, show data below
//Purpose: will write functions to createElemets and savedata in local storage without reload
//Receives: receives user inputs
//Returns: returns data below form in div or li to display data

// array of object i.e. [{id:date.now(), name: Singham, email:singham@gmail.com,}]
// validateForm(): will receive name,email and it's purpose is to check that name and email are in correct format or not if not then return "error"
// saveData(): it's pupose is to store id,name,email in localstorage, receive array of object onsubmit, keep data in localstorage
// renderData(): purpose to display name email in HTML in div/li, receives: get array of object from localStorage, returns the array of objects from stored in localstorage
// loadData(): purpose to display name,email on pageLoad if exsit and if not then empty array[], get name,email from local storage, returns the name,email which is stored in localstorage
// Validation — empty name = red error, no @ in email = red error
// Dark mode toggle — pure JS, no libraries
// Dynamic cards — 5 cards from array of objects, each with a delete button
let data = loadData();
renderData();

let theme = localStorage.getItem('theme');
if(theme === 'dark'){
  document.body.classList.add('dark-mode');
}

//User clicks on submit then newData will be pushed to data
// -> validateForm validate inputs
// -> data will be stored in local storage
function handleSubmit(nam, mail) {
  let result = validateForm(nam, mail);
  let nameErr = document.getElementById("nameError");
  let emailErr = document.getElementById("emailError");
  if (typeof result === "object") {
    nameErr.textContent = "";
    emailErr.textContent = "";
    data.push(result);
    saveData();
    renderData();
    return true;
  } else {
    if (result === "Please Enter your name") {
      nameErr.textContent = result;
    }

    if (result === "Please check your email") {
      emailErr.textContent = result;
    }
    return false;
  }
}

function validateForm(nam, mail) {
  let nameValidate = () => {
    // if name is not there then show error
    if (!nam.trim()) {
      return false;
    }
    // else return name
    return nam.trim();
  };

  let emailValidate = () => {
    if (!mail.trim() || !mail.includes("@")) {
      return false;
    }
    return mail;
  };

  let nameResult = nameValidate();
  let emailResult = emailValidate();

  if (nameResult === false) {
    return "Please Enter your name";
  }

  if (emailResult === false) {
    return "Please check your email";
  }

  let validData = {
    id: Date.now(),
    name: nameResult,
    email: emailResult,
  };

  return validData;
}
// let isValid = validateForm("Aman ", "aman@gmail.com");

//  saveData will store received data in localStorage
function saveData() {
  localStorage.setItem("data", JSON.stringify(data));
}

function loadData() {
  let storedData = localStorage.getItem("data");

  if (storedData) {
    return JSON.parse(storedData);
  } else {
    return [];
  }
}

document.getElementById("formData").addEventListener("submit", () => {
  event.preventDefault();

  let userName = document.getElementById("name");
  let nameVal = userName.value.trim();
  let userEmail = document.getElementById("email");
  let emailVal = userEmail.value.trim();


  let clearInput = handleSubmit(nameVal, emailVal);
  if(clearInput === true){
    userName.value = "";
    userEmail.value = "";
  }
});

//renderData function
//here we will display the data  in HTMl after getting it from localStorage
//here we will access single user with the help of foreach
//then we will create li to display that data

function renderData(container) {
  let displayData = document.getElementById("container");
  displayData.textContent = "";

  data.forEach((user) => {
    let li = document.createElement("li");
    li.textContent = `${user.name} - ${user.email}`;

    let delBtn = document.createElement("button");
    delBtn.classList.add('btn');
    delBtn.classList.add('btn-outline-danger');
    delBtn.textContent = "x";
    delBtn.addEventListener('click', () => {
      deleteData(user.id);
    })

    displayData.appendChild(li);
    li.appendChild(delBtn);
  });
}

document.getElementById('toggleColor').addEventListener('click', () => {
  if(document.body.classList.toggle('dark-mode')){
    localStorage.setItem('theme', 'dark');
  } else{
    localStorage.setItem('theme', 'light');
  }
})

//remove data from data array whose id doesn't matches
// on behalf of id - will remove the data
function deleteData(id){
  // here by filtering data to newData whose doesn't matches in data - will remove that particular data
  data = data.filter(user => id !== user.id);
  saveData();
  renderData();
}