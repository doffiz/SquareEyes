const APIURL = "https://api.noroff.dev/api/v1/square-eyes"
const trending = document.getElementById('trending');
const bestsellers = document.getElementById('bestsellers');
const APIURL_ID = "https://api.noroff.dev/api/v1/square-eyes"
const moviepic = document.getElementById('moviepic');
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const checkoutbutton = document.getElementById('checkoutbutton');
fetch(APIURL_ID + "/" + id)
    .then(response => response.json())
    .then(data => {
        moviepic.setAttribute("src", data.image);
        moviepic.setAttribute("alt", data.title);
        checkoutbutton.setAttribute("href", "thankyou.html?id=" + data.id);
    }).catch(error => {
        console.log(error);
    });
    fetch(APIURL)
        .then(response => response.json())
        .then(data => {
            let html = "";
            const movies = data.splice(0, 4);
            movies.forEach(movie => {
                html += `<a href="details.html?id=${movie.id}">
                <div class="movie">
                <img src="${movie.image}" alt="${movie.title}">
                <div class="movie-box">
                <strong>${movie.title}</strong>
                <div class="details">
                <p class="rating">${movie.rating}</p>
                <p class="price">${movie.price}</p>
                </div>
                </div>
                </div>
                </a>
                `
            });
            trending.innerHTML = html;
        }).catch(error => {
            console.log(error);
        }
        );