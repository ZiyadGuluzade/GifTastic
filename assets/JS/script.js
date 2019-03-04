$(function() {
    renderButtons(buttonsArray, "animalButton", "#buttonsdiv");
    console.log("page loaded");
})

var buttonsArray = ["Turtle", "Dog", "Cat", "Parrot", "Rabbit", "Lizard"];
// defining a function that renders buttons based on the value of the input field
function renderButtons(buttonsArray,addClassto,addToPlace) {
    $(addToPlace).empty();
    for(var i=0; i<buttonsArray.length; i++) {
        //creating buttons
        var a = $('<button>');
        //adding class to created button
        a.addClass(addClassto);
        // adding "data-type" attribute to created button
        a.attr('data-type', buttonsArray[i]);
        // giving the button a name which is equal to the value of the input field
        a.text(buttonsArray[i]);
        // adding created buttons to the specific area for buttons on the page
        $(addToPlace).append(a);
    }
}

$(document).on("click", ".animalButton", function(){
    //$('#search-results').epmty();
    var type = $(this).data("type");
    console.log(type);
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=l55rKps4jQRoOG8f3AUMuPH8AslOcVP5";
    $.ajax({
        url: queryURL,
        method: "GET",
    }).done(function(results){
        //looping through the array results
        for(var i=0; i,results.data.length; i++) {
            var animalDiv = $('<div class="search-item">');
            // creating variable to store the rating
            var rating = results.data[i].rating;
            //creating variable to dynamically render the img tag
            var image = $('<img>');
            // there two variable will store still version and dynamic version of the GIFs
            var dynamic = results.data[i].images.downsized.url;
            var still = results.data[i].images.downsized_still.url;
            image.attr('src',still);
            image.attr('src',dynamic);
            //adding the rating into the <p> tag
            var text = $('<p>').text('Rating: '+rating);
            // appending text with the rating and the image itself to the specific <div> for the every image
            animalDiv.append(text);
            animalDiv.append(image);
            // finally appending the <div> of the image into the specific field for all results
            $('#search-results').append(animalDiv);
            
        }
    })
})

// Problems I couldn't solve

// 1. I can manage only 1 click for buttons. In order to search for another animal user forced to reload the page. Couldn't solve it.
// 2. Had problems with grabbing input value and rendering it into the dynamically created button.
