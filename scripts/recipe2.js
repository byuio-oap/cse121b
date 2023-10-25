const appID = "2dac4ba1";
const appKey = "c7363cd77fc438c8dee151157f9dd664";
const baseURL = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${appID}&app_key=${appKey}`;
const recipeContainer = document.querySelector("#recipe-container");
const txtUserSearch = document.querySelector("#textUserSearch");
const btnFind = document.querySelector(".btn");


async function loadRecipes(type = "beef") {
  try {
    const url = `${baseURL}&q=${type}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    renderRecipes(data.hits);
  } catch (error) {
    console.error(error);
  }
}

let ingredientLines=[];
const getRecipeSteps = (ingredientLines) => {
  return ingredientLines.map((step) => `<li>${step}</li>`).join("");
};

let recipeList=[];
const renderRecipes = (recipeList) => {
  recipeContainer.innerHTML = "";
  recipeList.forEach((recipeObj) => {
    const {
      label: recipeTitle,
      ingredientLines,
      image: recipeImage,
    } = recipeObj.recipe;

    const recipeInstructions = getRecipeSteps(ingredientLines);

  
    const recipes = document.createElement("div");
    recipes.className = "recipe";

    const titleRecipe = document.createElement("div");
    titleRecipe.className = "recipe-title";
    titleRecipe.textContent = recipeTitle;

    const imageRecipe = document.createElement("div");
    imageRecipe.className = "recipe-image";
    const img = document.createElement("img");
    img.src = recipeImage;
    img.alt = "Recipe";
    imageRecipe.appendChild(img);

    const textInst = document.createElement("div");
    textInst.className = "recipe-text";
    const ul = document.createElement("ul");
    ul.innerHTML = recipeInstructions;
    textInst.appendChild(ul);

   


    recipes.appendChild(titleRecipe);
    recipes.appendChild(imageRecipe);
    recipes.appendChild(textInst);

    recipeContainer.appendChild(recipes);

  });
};

btnFind.addEventListener("click", () => loadRecipes(txtUserSearch.value));

txtUserSearch.addEventListener("keyup", (e) => {
  const userInput = txtUserSearch.value;
  if (e.keyCode === 13) {
    loadRecipes(userInput);
  }
});

loadRecipes();
