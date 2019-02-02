function runQuery(numArticles, queryURL) {

    $.ajax({ url: queryURL, method: "GET" ,dataType : 'json',  crossDomain:true})
       .done(function(NYTData) {
		  
		  
	/*	  $.ajax({
       url: queryURL,
       method: "GET",
       NYTData:{q:idiom},
       async:true,
       dataType : 'jsonp',   //you may use jsonp for cross origin request
       crossDomain:true,
       success: function(NYTData, status, xhr) {*/


            // for loop to go thru the numArticles and send to the console.log

            // clear the wells frp, the previous run
            $('#results-textarea').empty();

            for (var i = 0; i < numArticles; i++) {
                console.log(NYTData.response.docs[i].section_name);
                console.log(NYTData.response.docs[i].pub_date);
                console.log(NYTData.response.docs[i].web_url);

                // starting to send to HTML here
                var wellSection = $('<div>');
                wellSection.addClass("well");
                wellSection.attr('id', 'articleWell-' + i);
                // grab the well section and append to it
                $('#results-textarea').append(wellSection);

                // checks if things exist
                if (NYTData.response.docs[i].headline != "null") {
                    console.log(NYTData.response.docs[i].headline.main);
                    $("#articleWell-" + i).append("<h3>" + NYTData.response.docs[i].headline.main + "</h3>");
                }

                // checks if the byline exist
                if (NYTData.response.docs[i].byline && NYTData.response.docs[i].byline.hasOwnProperty("original")) {
                    console.log(NYTData.response.docs[i].byline.original);
                    $("#articleWell-" + i).append("<h5>" + NYTData.response.docs[i].byline.original + "</h5>");
                }


                // attached the content to the appropriate well, adds a target of blank to open URLs in new window

                $('a[href^="http://"], a[href^="https://"]').attr('target', '_blank');
                $("#articleWell-" + i).append("<h5>" + NYTData.response.docs[i].section_name + "</h5>");
                $("#articleWell-" + i).append("<h5>" + NYTData.response.docs[i].pub_date + "</h5>");
                $("#articleWell-" + i).append("<a href=" + NYTData.response.docs[i].web_url + ">" + NYTData.response.docs[i].web_url + "</a>");

            }

            console.log(queryURL);
            console.log(numArticles);
            console.log(NYTData);

        }).fail(function(err) {
            throw err;
        });

}

// main processes
// ==================

$('#button-submit').on('click', function() {

searchTerm = $('#search-title').val().trim();
    // console.log(searchTerm);

    var newURL = queryURLBase + "&q=" + searchTerm;
    // console.log(newURL);

    // get the number of results		
    numRecords = $('#result-number').val();


    // get the start and end year
    startYear = $('#input-start-year').val().trim();
    endYear = $('#input-end-year').val().trim();


    if (parseInt('input-start-year')) {

        // add the needed field to the url
        startYear = startYear + +"0101";

        // add the date information to the url
        newURL = newURL + "&begin_date=" + startYear;
    }

    if (parseInt('input-end-year')) {

        // add the needed field to the url
        endYear = endYear + +"0101";

        // add the date information to the url
        newURL = newURL + "&end_date=" + endYear;
    }


    // var newURL = newURL + "&begin_date=" + startYear + "&end_date=" + endYear;
    // console.log(newURL);


    runQuery(numRecords, newURL);
    return false;

})

$("#button-clear").click(function() {
    $(this).closest('form').find("input[type=text], textarea").val("");
});

