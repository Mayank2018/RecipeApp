const form = document.querySelector('form');
const searchResult = document.querySelector('.sreach-result');
const container = document.querySelector('.container');
let userQuery = '';

//var i = 0;
//var txt = 'Live, love, eat...';
//var speed = 50;
//
//function typeWriter() {
//    if (i < txt.length) {
//        document.getElementById("demo").innerHTML += txt.charAt(i);
//        i++;
//        setTimeout(typeWriter, speed);
//    }
//}
////https://api.edamam.com/search

const ID = "03ff6942";
const key = "d8bfdce3ee14400a5ceb8bff9ef249c9";

form.addEventListener('submit', (e) => {
    e.preventDefault();
    userQuery = e.target.querySelector('input').value;
    //console.log(userQuery);
    fetchData();
})

async function fetchData() {
    const baseURL = `https://api.edamam.com/search?q=${userQuery}&app_id=${ID}&app_key=${key}`;
    const response = await fetch(baseURL);
    const data = await response.json();
    createContent(data.hits);
    console.log(data);
}

function createContent(results) {
    let initialContent ='';
    results.map(result => {
        initialContent +=
            ` <div class="item">
                    <img src="${result.recipe.image}" />
                    <div class="flex-container">
                        <h1 class="title">${result.recipe.label}</h1>
                        <a  class="view-btn" href="${result.recipe.url}">View Recipe</a>
                    </div>
                    <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
            </div>`

    });

    searchResult.innerHTML = initialContent;
}
//function get_recipe () {
//
//    $.ajax({
//        url: 'https://api.edamam.com/search?q=pizza&app_id=03ff6942&app_key=d8bfdce3ee14400a5ceb8bff9ef249c9 ',
//        dataType: "json",
//        success: function (data) {
//            console.log(data.hits);
//        },
//        error: function () {
//            console.log("error in reqst");
//        }
//    });
//
//https://api.edamam.com/search?q=pizza&app_id=03ff6942&app_key=d8bfdce3ee14400a5ceb8bff9ef249c9
//} 
//get_recipe();

























//function search_recipe(recipename) {
    //for (var a = 0; a < recipename.length; a++) {
        //document.getElementById("myImg").innerHTML =recipename[a].recipe.image;
        //console.log(recipename[a].recipe.image);
        //var picture = recipename[a].recipe.image;
        //document.getElementById("myImg").innerHTML += recipename[a].recipe.image;

  //  }
//};






