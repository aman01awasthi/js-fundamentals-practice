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

function validateForm(nam, mail) {
    let nameValidate = () => {
      // if name is not there then show error
      if (!nam.trim()) {
        return false;
        // return "Please Enter your name";
      }
      // else return name
      return nam.trim();
    };
    
    let emailValidate = () => {
        if (!mail.trim() || !mail.includes("@")) {
            return false;
            // return "Please enter correct email";
        }
      return mail;
    };
    let nameResult = nameValidate();
    let emailResult = emailValidate();
    return {
        id: Date.now(),
        name: nameResult,
        email: emailResult,
    }
  // called function so that we can access function outside
}
// validateForm("Aman");
let isValid = validateForm("  ", "aman@gmail.com");
console.log(isValid);