function quotes() {
    var categories = ["happiness", "anger", "dreams", "intelligence", "love"];
    var mood = Math.floor(Math.random() * categories.length);
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + categories[mood],
        headers: { 'X-Api-Key': 'zanloHQp53FvGJffeRPwng==0BaPHaRW4myCo1F3' },
        contentType: 'application/json',
        success: function (result) {
            $('#quote').text(result[0].quote + '  - ' + result[0].author);
            localStorage.setItem("testQuote", result[0].category);
            let testQuote = localStorage.getItem("testQuote");
            ytConnect(testQuote);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
};

quotes();

function ytConnect(mood) {
    console.log(mood);
    ytApiKey = 'AIzaSyAAf6fRHMjxIPj6MQ4fr2jDvzw-VDIUy3o'
    $.ajax({
        method: 'GET',
        url: 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLU6EQu9809AJYvaOtXnB61QoYrUshDw-F&key=' + ytApiKey,
        contentType: 'application/json',
        success: function (result) {
            var happy = result.items[0].snippet.resourceId.videoId;
            var anger = result.items[1].snippet.resourceId.videoId;
            var dreamy = result.items[2].snippet.resourceId.videoId;
            var intelligent = result.items[3].snippet.resourceId.videoId;
            var love = result.items[4].snippet.resourceId.videoId;
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
            else {
                $('#ytVid').attr("src", "https://youtube.com/embed/" + anger);
            };           
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
};

$("#submit").click(function () {
    $('#results').attr("style", "display: flex");
    $('#home-page').attr("style", "display: none");
    $('#submit').attr("style", "display: none");
    $('#refresh').attr("style", "display: none");
    $('#back-btn').attr("style", "display: flex");
    $('#image-box').attr("style", "display: none");
    $('#header-subtitle').text("🎶Enjoy Your Playlist!🎶");
});

$('#back').click(function () {
    window.location.href = 'index.html';
});
$('#refresh').click(function () {
    window.location.reload();
});

