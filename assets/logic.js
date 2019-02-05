// setup variables
// ==================
var authKey = "NnHQGAcM2mzMG272PGida5YDkWNmzgFU";

var Food = '';
var Diet = '';
var Exclude = '';
var Intolerance = '';
var returnNum = '';
var Theme = '';
var baseUrl = 'https://webknox.com/recipeImages/';


function ourRecipe(Food, Diet, Exclude, Intolerance, returnNum, Theme){

    $.ajax({
    type: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?diet='+Diet+'&excludeIngredients='+Exclude+'&intolerances='+Intolerance+'&number='+returnNum+'&type='+Theme+'&query='+Food,
    headers: {
        "X-RapidAPI-Key":"591dbcc7d6mshdce628f7ef8a003p154387jsnfaa503cd34f9"
    },
        error: function(request,status,errorThrow){
            console.log('errorThrow', errorThrow)
        }
        }).done(function(data) {
            console.log(data); 
                for (i=0;i<data.results.length;i++){
            //variable for return titles and images.
                    var returnTitle = data.results[i].title;
                    console.log(returnTitle);
                
                    var picImage = "https://webknox.com/recipeImages/" + data.results[i].image;
                    var anchorTagImage = $("<a>");
                    var textAnchorTag = $("<a>");
            //create div for single reutrn item.
                    var searchResults = $("<div>");
            //create <p> tag for returnTitles.
                    var p = $("<p>")
                    p.addClass("title-search");
                    p.text(returnTitle);


                    textAnchorTag.attr("href", "https://spoonacular.com/recipes/" + data.results[i].image.split(".")[0]);
                    textAnchorTag.attr("target", "_blank");
                    textAnchorTag.append(p);
                    
                    console.log(p);
                   
                    //console.log(p);
            //create image tag for returned images.
                    var returnImage = $("<img>");
                    returnImage.attr("src", picImage);
                    searchResults.addClass("picture-boxes col-4");
                   // returnImage.addClass('image-search');
                    anchorTagImage.attr("href", "https://spoonacular.com/recipes/" + data.results[i].image.split(".")[0]);
                    anchorTagImage.attr("target", "_blank");
                    anchorTagImage.append(returnImage);


            //give the image tag src and attributes for the returned results.
                   // returnImage.attr("src", baseUrl+picImage);
            //appending the images and titles to the tags we created.
                    searchResults.append(anchorTagImage);
                    searchResults.append(textAnchorTag);

                   // searchResults.addClass("picture-boxes col-4");
            //appending the div(titles abd images) package to our html index page.
                    $("#picture-boxes").prepend(searchResults);      
                    
            // var repiceImg = "https://webknox.com/recipeImages/" + data.results[i].image;
            // var newDivImage = $("<div>");
            // var imageTagCreate = $("<img>");
            // var anchorTagImage = $("<a>");
            // var recipeTag = $("<p>");
            // var recipeName = data.results[i].title;
            // imageTagCreate.attr("src", repiceImg);
            // newDivImage.addClass("image-display col-4");
            // anchorTagImage.attr("href", "https://spoonacular.com/recipes/" + data.results[i].image.split(".")[0]);
            // anchorTagImage.attr("target", "_blank");
            // anchorTagImage.append(imageTagCreate);
            // newDivImage.append(anchorTagImage);
            // recipeTag.append(recipeName);
            // recipeTag.attr("href", "https://spoonacular.com/recipes/" + data.results[i].image.split(".")[0]);
            // recipeTag.attr("target", "_blank");
            // anchorTagImage.append(recipeTag);
            // $("#results-textarea").append(newDivImage);
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


