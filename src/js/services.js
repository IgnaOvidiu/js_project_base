import { API_URL, APP_ID } from './constant';
import * as dotenv from 'dotenv';
import { API_KEY } from './api';
dotenv.config();
process.env.API_KEY;

export const getRecipeList = async (searchInputTxt) => {
  const response = await fetch(
    `${API_URL}?type=public&q=${searchInputTxt}&app_id=${APP_ID}&app_key=${API_KEY}`
  );
  return response.json();
};

export function saveRecipe(meal) {
  window.localStorage.setItem('recipe', JSON.stringify(meal));
}
