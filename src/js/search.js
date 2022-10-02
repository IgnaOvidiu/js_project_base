import { API_KEY, APP_ID } from './constant';

const API_URL = 'https://api.edamam.com/api/recipes/v2';

const recipeList = document.querySelector('#recipe');
const searchBtn = document.querySelector('#button-addon2');

searchBtn.addEventListener('click', async () => {
  const searchInputTxt = document.getElementById('search').value.trim();
  console.log(searchInputTxt);
  const data = await getRecipeList(searchInputTxt);
  if (data.hits == 0) {
    recipeList.innerHTML = 'not found';
  } else {
    data.hits.map((item) => {
      const recipe = createRecipeElement(item);
      recipeList.appendChild(recipe);
    });
  }
});

const getRecipeList = async (searchInputTxt) => {
  const response = await fetch(
    `${API_URL}?type=public&q=${searchInputTxt}&app_id=${APP_ID}&app_key=${API_KEY}`
  );
  return response.json();
};

const createRecipeElement = (meal) => {
  const recipeEl = document.createElement('div');
  const cardEl = document.createElement('div');
  const imageEl = document.createElement('img');
  const cardBodyEl = document.createElement('div');
  const headingEl = document.createElement('h3');
  const linkEl = document.createElement('a');
  const buttonEl = document.createElement('button');

  imageEl.src = meal.recipe.image;
  headingEl.textContent = meal.recipe.label;
  linkEl.textContent = 'Get recipe';
  buttonEl.textContent = 'Save for later';

  recipeEl.classList.add('recipe');
  cardEl.classList.add('card');
  cardEl.style.width = '18rem';
  imageEl.classList.add('card-img-top');
  cardBodyEl.classList.add('card-body', 'text-center');
  buttonEl.classList.add('btn', 'btn-primary', 'saveRecipe');
  headingEl.classList.add('fs-6');
  linkEl.classList.add('btn', 'btn-primary', 'recipe-btn');

  recipeEl.appendChild(cardEl);
  cardEl.appendChild(imageEl);
  cardEl.appendChild(cardBodyEl);
  cardBodyEl.appendChild(headingEl);
  cardBodyEl.appendChild(linkEl);
  cardEl.appendChild(buttonEl);

  buttonEl.addEventListener('click', (e) => {
    e.preventDefault();
    saveRecipe(meal);
  });

  return recipeEl;
};

function saveRecipe(meal) {
  window.localStorage.setItem('recipe', JSON.stringify(meal));
}
