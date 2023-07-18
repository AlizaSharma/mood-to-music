function quotes() {
    var categories = ["happiness", "anger"];
    var mood = Math.floor(Math.random() * categories.length)
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

ytApiKey = 'AIzaSyAAf6fRHMjxIPj6MQ4fr2jDvzw-VDIUy3o'

function ytConnect(mood) {
    console.log(mood);
    $.ajax({
        method: 'GET',
        url: 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLU6EQu9809AJYvaOtXnB61QoYrUshDw-F&key=' + ytApiKey,
        contentType: 'application/json',
        success: function (result) {
            console.log(result.items[1].snippet.resourceId.videoId);
            var happy = result.items[0].snippet.resourceId.videoId;
            var anger = result.items[1].snippet.resourceId.videoId;
            console.log(mood)
            console.log(typeof mood)
            console.log(mood === "happiness");
            if (mood === "happiness") {
                $('#ytVid').attr("src", "https://youtube.com/embed/" + happy);
            }
            else {
                $('#ytVid').attr("src", "https://youtube.com/embed/" + anger);
            }
            ;


        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
};

$("#submit").click(function () {
    window.location.href = 'results.html';
    return false;
});

$('#back').click(function () {
    window.location.href = 'index.html';
});
$('#refresh').click(function () {
    window.location.reload();

});

quotes();
