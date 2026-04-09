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
let data = [];

//User clicks on submit then newData will be pushed to data
// -> validateForm validate inputs
// -> data will be stored in local storage
function handleSubmit() {
  let newData = {
    id: Date.now(),
    name: nam,
    email: mail,
  };
  data.push(newData);
  validateForm();
  saveData();
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
// validateForm("Aman");
let isValid = validateForm("   ", " ");
let isNameValid = validateForm("   ", "aman@gmail.com");
let isEmailValid = validateForm(" Aman  ", " ");
let bothValid = validateForm("Aman", "aman@gmail.com");
console.log(isValid);
console.log(isNameValid);
console.log(isEmailValid);
console.log(bothValid);

//  saveData will store received data in localStorage
function saveData() {
  localStorage.setItem("data", JSON.stringify(data));
}
