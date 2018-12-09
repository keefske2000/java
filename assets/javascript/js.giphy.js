
//  // Event listener for all button elements
//  var movies = ["Happy", "Frustrated", "Joy", "Tired", "Thankful", "Blessed", "Broke", "lonely", "overwhelmed", "optimistic"];

//  // displayMovieInfo function re-renders the HTML to display the appropriate content
//  function displayMovieInfo() {
//     var key = "avGnmMezRaOD0juzBlwH8TocnDr0qWoO";
//    var movie = $(this).attr("data-name");
//    console.log("movie is: " + movie);
//    var queryURL = "https://api.giphy.com/v1/gifs/search?&api_key=" + key + "&q=" + movie + "&limit=10&offset=0&rating=G&lang=en";
 
//    // Creating an AJAX call for the specific movie button being clicked
//    $.ajax({
//      url: queryURL,
//      method: "GET"
//    }).then(function(response) {
 
//        console.log(queryURL);
//        console.log(response);
 
//      // Creating a div to hold the movie
//      var movieDiv = $("<div class='key'>");
 
//  console.log("is it working" + response.data.length)
 
//  for (var i = 0; i < response.data.length; i++) {
 
 
 
//      // Storing the rating data
//      var rating = response.data[i].rating;
 
//      // console.log(rating);
 
//      // Creating an element to have the rating displayed
//      var pOne = $("<p>").text("Rating: " + rating);
 
//      // Displaying the rating
//      movieDiv.prepend(pOne);
 
     
 
//      // Retrieving the URL for the image
//      var imgURL = response.data[i].images.fixed_height.url;
 
//      // Creating an element to hold the image
//      var image = $("<img>").attr("src", imgURL);
 
//      // Appending the image
//      movieDiv.prepend(image);
//  }
 
//      // Putting the entire movie above the previous movies
//      $("#response-view").prepend(movieDiv);
//    });
 
//  }
 
//  // Function for displaying movie data
//  function renderButtons() {
 
//    // Deleting the movies prior to adding new movies
//    // (this is necessary otherwise you will have repeat buttons)
//    $("#buttons-view").empty();
 
//    // Looping through the array of movies
//    for (var i = 0; i < movies.length; i++) {
 
//      // Then dynamicaly generating buttons for each movie in the array
//      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
//      var a = $("<button>");
//      // Adding a class of movie-btn to our button
//      a.addClass("movie-btn");
//      // Adding a data-attribute
//      a.attr("data-name", movies[i]);
//      // Providing the initial button text
//      a.text(movies[i]);
//      // Adding the button to the buttons-view div
//      $("#buttons-view").append(a);
//    }
//  }
 
//  // This function handles events where a movie button is clicked
//  $("#add-movie").on("click", function(event) {
//    event.preventDefault();
//    // This line grabs the input from the textbox
//    var movie = $("#response-input").val().trim();
 
//    // Adding movie from the textbox to our array
//    movies.push(movie);
 
//    // Calling renderButtons which handles the processing of our movie array
//    renderButtons();
//  });
 
//  // Adding a click event listener to all elements with a class of "movie-btn"
//  $(document).on("click", ".movie-btn", displayMovieInfo);
 
//  // Calling the renderButtons function to display the intial buttons
//  renderButtons();