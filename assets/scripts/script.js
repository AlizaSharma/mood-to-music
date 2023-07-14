var category = 'happiness'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': 'zanloHQp53FvGJffeRPwng==0BaPHaRW4myCo1F3'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

// GET https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC8TZwtZ17WKFJSmwTZQpBTA&maxResults=25&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

ytApiKey = 'AIzaSyAAf6fRHMjxIPj6MQ4fr2jDvzw-VDIUy3o'

$.ajax({
    method: 'GET',
    url: 'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC8TZwtZ17WKFJSmwTZQpBTA&maxResults=25&key=' + ytApiKey,
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

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