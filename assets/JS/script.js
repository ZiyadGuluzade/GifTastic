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
        for(var i=0; i,results.data.length; i++) {
            var animalDiv = $('<div class="search-item">');
            var rating = results.data[i].rating;
            var image = $('<img>');
            var dynamic = results.data[i].images.downsized.url;
            var still = results.data[i].images.downsized_still.url;
            image.attr('src',still);
            image.attr('src',dynamic);
            var text = $('<p>').text('Rating: '+rating);
            animalDiv.append(text);
            animalDiv.append(image);
            $('#search-results').append(animalDiv);
            
        }
    })
})

$('#animalsearch').on('click', function() {
    var renderNewButton = $('<button>');
})




// var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=l55rKps4jQRoOG8f3AUMuPH8AslOcVP5";