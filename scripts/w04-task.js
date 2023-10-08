/* LESSON 3 - Programming Tasks */

/* Profile Object  */
var myProfile = {
  name: 'Orlando Pinelo',
  photo:'images/op.jpeg',
  favoriteFoods: [
    'BBQ',
    'Tacos',
    'Lazana',
    'Pizza',
    'Burger',
    'Chicken Tikka Massala'
  ],
  hobbies: [
    'MTB Riding',
    'Fishing',
    'Playing Sports',
    'Swimming',
    'Reading'
  ],
  

};
// Add more properties as needed




// Add the placesLived property with an empty array to myProfile
myProfile.placesLived = [];

// Create a new item (an object) with two properties and add it to the placesLived array
var newPlace = {
  place: "San Ignacio, Bz",
  length: "25 years"
};

myProfile.placesLived.push(newPlace);

//Second Place lived
var anotherPlace = {
  place: "Guatemala, GT",
  length: "2 years"
};

myProfile.placesLived.push(anotherPlace);
//Third placed lived
var thirdPlaceLived ={
    place: 'Quetzaltenango, GT',
    length: "15 year"
};
myProfile.placesLived.push(thirdPlaceLived);






/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent=myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src',myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
  let renderFoodeElements = document.createElement('li');
  renderFoodeElements.textContent = food;

  //  Append the <li> elements above create
  document.querySelector('#favorite-foods').appendChild(renderFoodeElements);
});




/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
  let renderHobbyElements = document.createElement('li');
  renderHobbyElements.textContent = hobby;

    //  Append the <li> elements above create
 document.querySelector('#hobbies').appendChild(renderHobbyElements);
});




/* Places Lived DataList */

myProfile.placesLived.forEach((placeLived) => {
  let renderPlacesLived = document.createElement('dt');
  renderPlacesLived.textContent = placeLived.place;
  
  let renderPlacesLivedLength = document.createElement('dd');
  renderPlacesLivedLength.textContent = placeLived.length;
  
  //Append the HTML <dt> and <dd> elements created above 
  document.querySelector('#places-lived').appendChild(renderPlacesLived);
  document.querySelector('#places-lived').appendChild(renderPlacesLivedLength);
})



