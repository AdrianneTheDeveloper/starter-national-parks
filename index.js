// Select all elements with the class "description"
const descriptions = document.querySelectorAll(".description");

// Loop through descriptions that are parsed
// For every description, if the length is more than 250 characters
// slice the description at 250 and append an ellipses(link) to the end.

for (let desc of descriptions.values()) {
  let content = desc.innerText;
  if (content.length > 250) {
    content = content.slice(0, 250);
    content = content + '<a href="#">...</a>';
  }
  desc.innerHTML = content;
}

// Search for all divs with the class value descended from divs with the class rating.
const ratings = document.querySelectorAll(".rating .value");

// Turn each rating into an integer.
// If integer is more than 4.7 change fontWeight to bold.
for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);
  if (ratingValue > 4.7) {
    rating.style.fontWeight = "bold";
  }
}

// Select the parks on the page using the park class as a selector
const parks = document.querySelectorAll(".park");

// Get number of parks.
const numberParks = parks.length;

// Create new (empty) element.
const newElement = document.createElement("div");

// Add text to new element.
newElement.innerText = `${numberParks} exciting parks to visit`;
// Add style class to element.
newElement.classList.add("header-statement");

// Add new element to the DOM by selecting header and using appendChild

const header = document.querySelector("header");
header.appendChild(newElement);

// Select a button
const firstBtn = document.querySelector("button");
// Call the addEventListener() method on this button.
firstBtn.addEventListener("click", (event) => {
  console.log("You clicked the button", event);
});

//Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rateBtn");

// Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target.parentNode);
  });
});
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  });
});

const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }

};
// Giving the user the ability to sort the list of parks.
// Sort by either name or rating.

// Select #nameSorter link.
const sortNames = () => {
  const nameSorter = document.querySelector("#nameSorter");
// Add an event listener
// Prevent default behavior of reloading the page with preventDefault
nameSorter.addEventListener("click", (event) => {
  event.preventDefault();
  // When button is clicked
  // Get the <main> element that contains all the parks.
  const main = document.querySelector("main");
  // Get a NodeList of all parks
  const parkList = main.querySelectorAll(".park");
  // Empty the <main> element
  main.innerHTML = " ";
  // Elements are removed from the DOM but they still exist and can be referenced
  // Create an array
  const parksArray = Array.from(parkList);
  // Sort array
  parksArray.sort(sortByName);
  // Iterate through array and append each park to main element
  parksArray.forEach((park) => {
    main.appendChild(park);
  })
});
} 
window.addEventListener("DOMContentLoaded", sortNames);

// Get the parent element of all parks
// const main = document.querySelector("main");

// Select a single park
// const park = main.querySelector(".park");

// Remove that park
// main.removeChild(park);
