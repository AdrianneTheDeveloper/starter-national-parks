// Function accepts a string and returns true if the value is not null
// and string contains at least one non-space character
function validateExists(value) {
    return value && value.trim();
  }


// Validate each input
function validateForm(formData) {
    const errors = {};
  
    // check if name was entered
    if (!validateExists(formData.get("name"))) {
      errors.name = "Please enter a name";
    }
  
    // check if rating was entered
    if (!validateExists(formData.get("rating"))) {
      errors.rating = "Please enter a rating";
    }
  
    // check if description was entered
    if (!validateExists(formData.get("description"))) {
      errors.description = "Please enter short description";
    }
  
    // check if established date was entered
    if (!validateExists(formData.get("established"))) {
      errors.established = "Please enter date";
    }
  
    // check if area was entered
    if (!validateExists(formData.get("area"))) {
      errors.area = "Please enter the area of the park";
    }
  
    // check if location date was entered
    if (!validateExists(formData.get("location"))) {
      errors.location = "Please enter the location of the park";
    }
  
    return errors;
  }
// Create a function that handles form submission
const submitHandler = (event) => {
    event.preventDefault();

    // Get the name inputted into the form
    // const parkName = document.querySelector("#name").value;
    const form = event.target;
    const formData = new FormData(eform);
    // clear all previous errors
  const errorElements = document.querySelectorAll(".error");
  for (let element of errorElements) {
    element.style.display = "none";
    }
    
    // display any new errors
  Object.keys(errors).forEach((key) => {
    // find the specific error element
    const errorElement = document.querySelector(`#park_${key} .error`);
    errorElement.innerHTML = errors[key];
    errorElement.style.display = "block";
  });
};




// Add a main function that creates the event listener for the form submission.
const main = () => {
    // Select the form element
    const form = document.querySelector("#parkForm");

    // Attach the submit handler
    form.addEventListener("submit", submitHandler);
}
// Wait for all html to load and then runs main function
window.addEventListener("DOMContentLoaded", main);



