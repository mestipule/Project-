// setup variables
// ==================
var authKey = "NnHQGAcM2mzMG272PGida5YDkWNmzgFU";

var Food = '';
var Diet = '';
var Exclude = '';
var Intolerance = '';
var returnNum = '';
var Theme = '';
var baseUrl = 'https://spoonacular.com/recipeImages/';


function ourRecipe(Food, Diet, Exclude, Intolerance, returnNum, Theme){

    $.ajax({
    type: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?diet='+Diet+'&excludeIngredients='+Exclude+'&intolerances='+Intolerance+'&number='+returnNum+'&type='+Theme+'&query='+Food,
    headers: {
        "X-RapidAPI-Key":"591dbcc7d6mshdce628f7ef8a003p154387jsnfaa503cd34f9"
    },
// <<<<<<< mestipule
//    error: function(request,status,errorThrown) {
//         // There's been an error, do something with it!
//         // Only use status and errorThrown.
//         // Chances are request will not have anything in it.
//         console.log('errorThrown', errorThrown)
//    }
//  }).done(function(data) {
//    console.log(data); 
//    for (i=0;i<data.results.length;i++){
//   console.log(data.results[i].title);
//   //(coded by mge) 
//   // isolated issue, that one the url didn't work 
  var repiceImg = "https://webknox.com/recipeImages/" + data.results[i].image;
  var newDivImage = $("<div>");
  var imageTagCreate = $("<img>");
  var anchorTagImage = $("<a>");
  var recipeTag = $("<p>");
  var recipeName = data.results[i].title;
  imageTagCreate.attr("src", repiceImg);
  newDivImage.addClass("image-display");
  anchorTagImage.attr("href", "https://spoonacular.com/recipes/" + data.results[i].image.split(".")[0]);
  anchorTagImage.attr("target", "_blank");
  anchorTagImage.append(imageTagCreate);
  newDivImage.append(anchorTagImage);
  recipeTag.append(recipeName);
  recipeTag.attr("href", "https://spoonacular.com/recipes/" + data.results[i].image.split(".")[0]);
  recipeTag.attr("target", "_blank");
  anchorTagImage.append(recipeTag);
  $("#results-textarea").append(newDivImage);
// //(ends for mge)
// =======
//         }).done(function(data) {
//             console.log(data); 
//                 for (i=0;i<data.results.length;i++){
//             //variable for return titles and images.
//                     var returnTitle = data.results[i].title;
//                     var picImage = data.results[i].image;

//             //create div for single reutrn item.
//                     var searchResults = $("<div>");
//             //create <p> tag for returnTitles.
//                     var p = $("<p>").text("Yummmy: " + returnTitle);
//                     p.addClass("title-search");
//                     //console.log(p);
//             //create image tag for returned images.
//                     var returnImage = $("<img>");
//                     returnImage.addClass('image-search');
//             //give the image tag src and attributes for the returned results.
//                     returnImage.attr("src", baseUrl+picImage);
//             //appending the images and titles to the tags we created.
//                     searchResults.append(returnImage);
//                     searchResults.append(p);
//             //appending the div(titles abd images) package to our html index page.
//                     $("#picture-boxes").prepend(searchResults);      
                    
// >>>>>>> master
}

    $.ajax({
    type: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/jokes/random',
    headers: {
        "X-RapidAPI-Key":"591dbcc7d6mshdce628f7ef8a003p154387jsnfaa503cd34f9"
    },
        }).done(function(joke) {
            console.log(joke.text);
            var jokeP = $("<h>").text('Food Joke! '+joke.text);
            jokeP.addClass("joke-text");
            jokeP.append(joke);
            $("#joke-header").append(jokeP);
    })
});}


// on click this submits prompts and pulls the queries from the api

$('#button-submit').on('click', function() {

    Food = $('#search-food').val().trim();
    Diet = $('#dietary-preference').val().trim();
    Exclude = $('#allergy').val().trim();
    Intolerance = $('#intolerance').val().trim();
    returnNum = $('#input-result').val().trim();
    Theme = $('#theme').val().trim();

//console.log(searchTerm);
//alert(searchTerm);
ourRecipe(Food, Diet, Exclude, Intolerance, returnNum, Theme);

})

$("#button-clear").click(function() {
    $(this).closest('form').find("input[type=text], textarea").val("");

});


