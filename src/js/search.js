const API_URL = 'Https://www.themealdb.com/api/json/v1/1';

const recipeList = document.querySelector('#recipe');
const searchBtn = document.querySelector('#button-addon2');

searchBtn.addEventListener('click', getRecipeList);

function getRecipeList() {
  let searchInputText = document.querySelector('#search').value;
  console.log(searchInputText);
}
