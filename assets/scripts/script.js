// function to get a random quote from the QuoteNinjas API.
function quotes() {
    // putting the categories into an option and then running math random to pick a random category
    var categories = ["happiness", "anger", "dreams", "intelligence", "love", "cool"];
    var mood = Math.floor(Math.random() * categories.length);
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + categories[mood],
        headers: { 'X-Api-Key': 'zanloHQp53FvGJffeRPwng==0BaPHaRW4myCo1F3' },
        contentType: 'application/json',
        success: function (result) {
            // on successful response from the API we dynamically insert the information into the HTML
            $('#quote').text(result[0].quote + '  - ' + result[0].author);
            // setting the data of category to local storage then getting it and putting it into a function to be called later
            localStorage.setItem("testQuote", result[0].category);
            let testQuote = localStorage.getItem("testQuote");
            // function containing the value of the mood we will then check in our YouTube API to match it with a playlist
            ytConnect(testQuote);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
};
// calling the quotes function to run
quotes();
//function with an argument that we will use that contains the mood we got from the quotes
function ytConnect(mood) {
    console.log(mood);
    ytApiKey = 'AIzaSyAAf6fRHMjxIPj6MQ4fr2jDvzw-VDIUy3o'
    $.ajax({
        method: 'GET',
        url: 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=PLU6EQu9809AJYvaOtXnB61QoYrUshDw-F&key=' + ytApiKey,
        contentType: 'application/json',
        success: function (result) {
            // setting variables for the different moods that will connect to the proper YouTube VideoId in the playlist created.
            var happy = result.items[0].snippet.resourceId.videoId;
            var anger = result.items[1].snippet.resourceId.videoId;
            var dreamy = result.items[2].snippet.resourceId.videoId;
            var intelligent = result.items[3].snippet.resourceId.videoId;
            var love = result.items[4].snippet.resourceId.videoId;
            var cool = result.items[5].snippet.resourceId.videoId;
            //if else expressions to check for the right mood to then dynamically insert it into the HTML
            if (mood === "happiness") {
                $('#ytVid').attr("src", "https://youtube.com/embed/" + happy);
            }
            else if (mood === "dreams") {
                $('#ytVid').attr('src', "https://youtube.com/embed/" + dreamy);
            }
            else if (mood === "intelligence") {
                $('#ytVid').attr('src', "https://youtube.com/embed/" + intelligent);
            }
            else if (mood === "love") {
                $('#ytVid').attr('src', "https://youtube.com/embed/" + love);
            }
            else if (mood === "cool") {
                $('#ytVid').attr('src', "https://youtube.com/embed/" + cool);
            }
            else {
                $('#ytVid').attr("src", "https://youtube.com/embed/" + anger);
            };           
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
};
//creating an event listener for the button of "I like this Quote" to then hide the homepage elements and show the results elements"
$("#submit").click(function () {
    $('#results').attr("style", "display: flex");
    $('#home-page').attr("style", "display: none");
    $('#submit').attr("style", "display: none");
    $('#refresh').attr("style", "display: none");
    $('#back-btn').attr("style", "display: flex");
    $('#image-box').attr("style", "display: none");
    $('#header-subtitle').html('<a href="https://www.youtube.com/watch?v=BBJa32lCaaY">🎶Enjoy Your Playlist!🎶</a>');
});
// event listener on the back button to refresh the page with the starting HTML
$('#back').click(function () {
    window.location.href = 'index.html';
});
// event listener to reload the page with a new quote
$('#refresh').click(function () {
    window.location.reload();
});

