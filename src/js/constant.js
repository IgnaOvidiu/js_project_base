export const API_URL = 'https://api.edamam.com/api/recipes/v2';
export const API_KEY = '3cb67c31ca45be3a00e386fd5d1406d1';
export const APP_ID = 'b0e61b12';

export const recipeList = document.querySelector('#recipe');
export const searchBtn = document.querySelector('#button-addon2');

export const item = JSON.parse(window.localStorage.getItem('recipe'));
export const saved = document.querySelector('#saved');
