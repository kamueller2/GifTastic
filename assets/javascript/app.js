// variables
var topics = ["dog", "bunny", "cat", "sloth"];
var limit = 10;
var rating = "PG";

function displayGif() {
    let topic = $(this).attr("data-name");
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=funny+dog&api_key=DAAX1HYTh03ajx2O56tI7GMkOOzyc778";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        console.log(response);

    })


};


// $(".button").on("click", function() {
//     let name = $(this).data("name");
//     console.log(name);
// })

function makeButtons() {

    $(".buttons-container").empty();

    // looping through array of topics & adding dynamic buttons
    for (let i = 0; i < topics.length; i++) {
        let newBtn = $("<button>");
        newBtn.addClass("gif-btn");
        newBtn.attr("data-name", topics[i]);
        newBtn.text(topics[i]);
        $(".buttons-container").append(newBtn);
    }
}

// when gif is clicked
$("#add-animal").on("click", function(event) {
    event.preventDefault();

    // storing input from user input
    let topic = $("#inlineFormInput").val().trim();

    // adding new gif to topics array
    topics.push(topic);

    makeButtons();

})

$(document).on("click", "gif-btn", displayGif);
makeButtons();



// function generateGifs() {

//     $(newBtn).on("click", function() {

//         let gif = $(this).attr("data-name");

//         let queryURL = `https://api.giphy.com/v1/gifs/search?q=${gif}&api_key=DAAX1HYTh03ajx2O56tI7GMkOOzyc778`;
//         // let queryURL = `https://api.giphy.com/v1/gifs/search?&q=${gif}&api_key=DAAX1HYTh03ajx2O56tI7GMkOOzyc778&limit= ${limit}&offset=0&rating=${rating}&lang=en`;

//         $.ajax({
//             url: queryURL,
//             method: "GET"
//         })


//     })

//     .then(function(response) {
//         console.log(response);


//         let animalURL = response.data.image_original_url;

//         let gifImg = $("<img>");

//         gifImg.attr("src", animalURL);
//         gifImg.attr("alt", "animal gif");

//         $("#images").prepend(gifImg);
//     })

// }





// $(document).ready(function() {
//     $()
// })
// // on("click", "newBtn", generateGifs);

// makeButtons();