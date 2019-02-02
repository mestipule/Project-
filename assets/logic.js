// setup variables
// ==================
var authKey = "NnHQGAcM2mzMG272PGida5YDkWNmzgFU";

var Food = '';
var Diet = '';
var Exclude = '';
var Intolerance = '';
var returnNum = '';
var Theme = '';


function ourRecipe(Food, Diet, Exclude, Intolerance, returnNum, Theme){

    $.ajax({
    type: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?diet='+Diet+'&excludeIngredients='+Exclude+'&intolerances='+Intolerance+'&number='+returnNum+'&type='+Theme+'&query='+Food,
    headers: {
        "X-RapidAPI-Key":"591dbcc7d6mshdce628f7ef8a003p154387jsnfaa503cd34f9"
    },
   error: function(request,status,errorThrown) {
        // There's been an error, do something with it!
        // Only use status and errorThrown.
        // Chances are request will not have anything in it.
        console.log('errorThrown', errorThrown)
   }
 }).done(function(data) {
   console.log(data); 
   for (i=0;i<data.results.length;i++){
  console.log(data.results[i].title);
}
});}


// on click this pulls the query from the api 

$('#button-submit').on('click', function() {

    Food = $('#search-food').val().trim();
    Diet = $('#dietary-preference').val().trim();
    Exclude = $('#allergy').val().trim();
    Intolerance = $('#intolerance').val().trim();
    returnNum = $('#input-result').val().trim();
    Theme = $('#theme').val().trim();

    // console.log(searchTerm);
//alert(searchTerm);
ourRecipe(Food, Diet, Exclude, Intolerance, returnNum, Theme);
    
    //runQuery(numRecords, newURL);
    //return false;

})

$("#button-clear").click(function() {
    $(this).closest('form').find("input[type=text], textarea").val("");
});


