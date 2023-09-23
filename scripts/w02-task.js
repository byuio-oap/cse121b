/* W02-Task - Profile Home Page */



/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

// declare and instantiate a variable to hold your name
const fullName = "Orlando Ancelmo Pinelo";
//declare and instantiate a variable to hold the current year
const currentYear = new Date().getFullYear();
//declare and instantiate a variable to hold the file path (location) and file name 
const profilePicture = "images/op.jpeg";
 
/* Step 3 - Element Variables */

//Use the document.getElementById() method to get the HTML element with the id of name
const nameElement = document.getElementById("name");
//Use the document.getElementById() method to get the HTML element with the id of foo
const foodElement = document.getElementById("food");
//Use the document.getElementById() method to get the HTML element with the id of n "year"
const yearElement = document.querySelector("#year");
//Use any viable method to get the profile image
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

//Assign the nameElement's innerHTML property the fullName variable value with Strongs
nameElement.innerHTML = `<strong>${fullName}</strong>`;
//Use the textContent property to set the value of the element to the value of the variable currentYear.
yearElement.textContent = currentYear;
//Use the setAttribute method to set the src property of the image
imageElement.setAttribute('src', profilePicture);
//Use the setAttribute method to set the alt property of the image
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */

const favoriteFoods = ["Pizza", "Sushi", "Chocolate", "Burgers", "Ice Cream", "BBQ", "Tacos", "Tortas"];
// Convert the array to a comma-separated string
foodElement.innerHTML=favoriteFoods;
//foodElement.innerHTML=favoriteFoods.join(', ');


// // Declare and instantiate a variable for the new favorite food
const newFavoriteFood = "Pasta";
// // Add the new favorite food to the array and 
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;


//Remove the first element in the favorite food array.
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;


//Remove the last element in the favorite food array.
 favoriteFoods.pop();
 foodElement.innerHTML += `<br>${favoriteFoods}`;












