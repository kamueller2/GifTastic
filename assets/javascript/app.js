var topics = ["dog", "bunny", "cat", "sloth"];
var limit = 10;
var rating = "PG";

function makeButtons() {
    for (let i = 0; i < topics.length; i++) {
        let newBtn = $("<button>");
        newBtn.addClass("btn");
        newBtn.text(topics[i]);
        $(".buttons-container").append(newBtn);
    }
}

makeButtons();






// $("#add-animal").on("click", function(event) {
//         event.preventDefault();
//     })
//     // renders the page for returned gifs
// let gifsView = () => {

//     let gif = $(this).attr("data-name");

//     let queryURL = `https://api.giphy.com/v1/gifs/search?&api_key=ynFTVfkAwz3tDpsyIcbVdgE1bI5lyqtd&tag=${gif}`;

//     let query = "https://api.giphy.com/v1/gifs/trending?api_key=ynFTVfkAwz3tDpsyIcbVdgE1bI5lyqtd&limit=25&rating=G";

//     // ajax call for specific button clicked
//     $.ajax({
//         url: queryURL,
//         method: "GET"

//     }).then(function(response) {
//         console.log(response);

//     })

//     // array of topics
//     var topics = ['dog', 'monkey', 'cat', 'bird'];


//     $(".info").empty();


//     // FUNCTIONS

//     function gifButtons() {

//         $(".buttons").empty();

//         // looping through topics
//         for (let i = 0; i < topics.length; i++) {

//             let gifBtn = $("<button>");

//             gifBtn.attr("class", "button-gif");

//             gifBtn.attr("data-name", topics[i]);

//             gifBtn.text(topics[i]);


//             $(".buttons").append(gifBtn);

//         }
//     }




// }

// //CREATES AN EVENT LISTENER FOR WHEN USER CLICKS ON submit button, CB THIS FUNC
// $("#button-addon2").on("click", function() {


// })