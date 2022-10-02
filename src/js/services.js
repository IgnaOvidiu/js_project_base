import { API_KEY, API_URL, APP_ID } from './constant';

export const getRecipeList = async (searchInputTxt) => {
  const response = await fetch(
    `${API_URL}?type=public&q=${searchInputTxt}&app_id=${APP_ID}&app_key=${API_KEY}`
  );
  return response.json();
};

export function saveRecipe(meal) {
  window.localStorage.setItem('recipe', JSON.stringify(meal));
}