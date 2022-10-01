const item = JSON.parse(window.localStorage.getItem('recipe'));
const saved = document.querySelector('#saved');

if (item == null) {
  saved.innerHTML = '';
} else {
  saved.innerHTML = `<div class = "recipe" data-id = "${item.idMeal}">
  <div class="card" style="width: 18rem;">
    <img src = "${item.strMealThumb}" alt = "food" class="card-img-top">
    <div class="card-body text-center">
      <h3 class="fs-6">${item.strMeal}</h3>
      <a href = "#" class = "btn btn-primary recipe-btn">Get Recipe</a>
    </div>
    <button type="button" class="btn btn-primary removeRecipe" id="remove"
    data-id = "${item.idMeal}"> 💔 Remove From Saved Recipes </button>
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
