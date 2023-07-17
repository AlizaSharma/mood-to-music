var quoteCat;
$(function quotes() {
    var category = 'happiness'
    var category2 = 'anger'
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
        headers: { 'X-Api-Key': 'zanloHQp53FvGJffeRPwng==0BaPHaRW4myCo1F3'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result[0].quote);
            $('#quote').text(result[0].quote + '  - ' + result[0].author);
            localStorage.setItem("quoteCat", JSON.stringify(result[0].category));
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
    
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + category2,
        headers: { 'X-Api-Key': 'zanloHQp53FvGJffeRPwng==0BaPHaRW4myCo1F3'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            $('#quote').text(result[0].quote + '  - ' + result[0].author);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
    });

// GET https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC8TZwtZ17WKFJSmwTZQpBTA&maxResults=25&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

ytApiKey = 'AIzaSyAAf6fRHMjxIPj6MQ4fr2jDvzw-VDIUy3o'

$.ajax({
    method: 'GET',
    url: 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLU6EQu9809AJYvaOtXnB61QoYrUshDw-F&key=' + ytApiKey,
    contentType: 'application/json',
    success: function(result) { 
        console.log(result.items[0].snippet.resourceId.videoId);
        var happy = result.items[0].snippet.resourceId.videoId
        var anger = result.items[1].snippet.resourceId.videoId
       var quoteCat = localStorage.getItem("quoteCat");
       console.log(quoteCat);
       if (quoteCat === "happiness") {
        $('#ytVid').attr("src", "https://youtube.com/embed/" + happy);
       }
       else{
        $('#ytVid').attr("src", "https://youtube.com/embed/" + anger)
       }
    
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
// 
// we want to store the category of the quote submitted to local store
// then in a seperate function get the category happiness or angry
// assign each category with its respective result number
// append results to page 

//   function loadClient() {
//     gapi.client.setApiKey("AIzaSyAAf6fRHMjxIPj6MQ4fr2jDvzw-VDIUy3o");
//     return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//         .then(function() { console.log("GAPI client loaded for API"); },
//               function(err) { console.error("Error loading GAPI client for API", err); });
//   }
//   // Make sure the client is loaded and sign-in is complete before calling this method.
//   function execute() {
//     return gapi.client.youtube.playlists.list({
//       "part": [
//         "snippet,contentDetails"
//       ],
//       "channelId": "UC8TZwtZ17WKFJSmwTZQpBTA",
//       "maxResults": 25
//     })
//         .then(function(response) {
//                 // Handle the results here (response.result has the parsed body).
//                 console.log("Response", response);
//               },
//               function(err) { console.error("Execute error", err); });
//   }

$("#submit").click(function(){
    window.location.href='results.html';
    return false;
 });

$('#back').click(function(){
    window.location.href='index.html';
 });