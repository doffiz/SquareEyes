const APIURL_ID = "https://api.noroff.dev/api/v1/square-eyes"
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const movietitle = document.getElementById('movietitle');
const videobox = document.getElementById('videobox');

fetch(APIURL_ID + "/" + id)
    .then(response => response.json())
    .then(data => {
        movietitle.innerHTML = data.title;
        videobox.setAttribute("poster", data.image);
    }).catch(error => {
        console.log(error);
    });
