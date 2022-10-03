import { item, saved } from './constant';

if (item == null) {
  saved.innerHTML = '';
} else {
  saved.innerHTML = `<div class = "recipe" data-id = "${item.recipe.label}">
  <div class="card" style="width: 18rem;">
    <img src = "${item.recipe.image}" alt = "food" class="card-img-top">
    <div class="card-body text-center">
      <h3 class="fs-6">${item.recipe.label}</h3>
      <a href = "#" class = "btn btn-primary recipe-btn">Get Recipe</a>
    </div>
    <button type="button" class="btn btn-primary removeRecipe" id="remove"> 💔 Remove From Saved Recipes </button>
  </div>
  </div>
  `;
  const removeRec = document.querySelector('#remove');
  removeRec.addEventListener('click', removeRecipe);
  function removeRecipe(e) {
    e.preventDefault();
    if (e.target.classList.contains('removeRecipe')) {
      window.localStorage.removeItem('recipe');
    }
    window.location.reload();
  }
}
