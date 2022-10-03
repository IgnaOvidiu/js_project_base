import { recipeList, searchBtn } from './constants';
import { createRecipeElement } from './createElement';
import { getRecipeList } from './services';

searchBtn.addEventListener('click', async () => {
  const searchInputTxt = document.getElementById('search').value.trim();
  console.log(searchInputTxt);
  recipeList.innerHTML = '';
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
