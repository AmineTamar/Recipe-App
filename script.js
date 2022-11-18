const searchFrom = document.querySelector("form")
const searchResuldiv = document.querySelector(".search-result")
const container = document.querySelector(".container")
let searchQuery="";
const APP_ID = "79d8df6a"
const APP_key ="46853b6c3ba2eb4cb24097b9af307571"


searchFrom.addEventListener("submit",(e)=>{
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;

  fetchApi();
  

}
)

async function fetchApi(){

  const baseURL=`https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&to=20`

  const response = await fetch(baseURL);
  const data= await response.json();
  generateHtml(data.hits)

console.log(data)

}
function generateHtml(results) {
  container.classList.remove(`initial`)

  let = hmtlContent = "";
results.map(result =>{
hmtlContent += 

`
         <div class="item">
          <img src="${result.recipe.image}" alt="">
          <div class="flex-container">
            <h1 class="title">${result.recipe.label}</h1>
            <a class="view-btn" href="${result.recipe.url}" target="_blank">View Recipe</a>
          </div>
          <p class="item-data">Calories: ${result.recipe.calories.toFixed(0)}</p>
          <p class="item-data">Diet Label: ${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels:"No data Found"}</p>

          <p class="item-data">Health Label: ${result.recipe.healthLabels}</p>

        </div>
        
 `

})
searchResuldiv.innerHTML=hmtlContent;

}