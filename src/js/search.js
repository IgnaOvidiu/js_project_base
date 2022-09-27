const API_URL = 'https://www.themealdb.com/api/json/v1/1';

const recipeList = document.querySelector('#recipe');
const searchBtn = document.querySelector('#button-addon2');

searchBtn.addEventListener('click', getRecipeList);

function getRecipeList() {
  let searchInputTxt = document.getElementById('search').value.trim();
  fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`
  )
    .then((response) => response.json())
    .then((data) => {
      let html = '';
      if (data.meals) {
        data.meals.forEach((meal) => {
          html += `
            <div class = "recipe" data-id = "${meal.idMeal}">
                <div class="card" style="width: 18rem;">
                  <img src = "${meal.strMealThumb}" alt = "food" class="card-img-top">
                  <div class="card-body text-center">
                    <h3 class="fs-6">${meal.strMeal}</h3>
                    <a href = "#" class = "btn btn-primary recipe-btn">Get Recipe</a>
                  </div>
                  <button type="button" class="btn btn-primary" id="save"> Save For Later </button>
                </div>
              </div>
            `;
        });
        recipeList.classList.remove('notFound');
      } else {
        html = "Sorry, we didn't find any meal!";
        recipeList.classList.add('notFound');
      }
      recipeList.innerHTML = html;
    });
}
