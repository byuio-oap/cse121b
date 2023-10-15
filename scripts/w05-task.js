/* W05: Programming Tasks */

/* Declare and initialize global variables */
// Declare a const variable referencing the HTML div element
const templesElement = document.getElementById("temples"); 

// Declare a global empty array variable to store a list of temples
let templeList = [];


/* async displayTemples Function */

const displayTemples = (temples) => {
    

    temples.forEach((temple) => {
      
      const article = document.createElement("article");
  
      const templeName = document.createElement("h3");
      templeName.textContent = temple.templeName;
  
      const img = document.createElement("img");
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", temple.templeName);
  
      article.appendChild(templeName);
      article.appendChild(img);


      templesElement.appendChild(article);
      
    });
  };


/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok)
     {
        const temples = await response.json();
        templeList = temples;
        displayTemples(templeList);

 
    }

  };
  

/* reset Function */

const reset = () => {
    document.querySelector("#temples").innerHTML = "";
  };


/* sortBy Function */

const sortBy = (temples) => {
    // Call the reset function to clear the output
    reset();
  
    // Get the value of the HTML select element with the ID "sortBy"
    const filter = document.getElementById("sortBy").value;
  
    switch (filter) {
      case "utah":
        displayTemples(temples.filter(temple => temple.location.includes("Utah")));
        break;
      case "notutah":
        displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
        break;
      case "older":
        displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
        break;
      case "all":
        displayTemples(temples);
        break;
      default:
        console.error("Invalid filter value.");
    }
  };
  
  // Add an event listener for the "change" event on the select element with ID "sortBy"
  document.getElementById("sortBy").addEventListener("change", () => {
    sortBy(templeList);
  });
  


//getTemples();

/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () =>{sortBy(templeList)});
getTemples();


