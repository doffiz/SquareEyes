
const APIURL = "https://api.noroff.dev/api/v1/square-eyes"
const trending = document.getElementById('trending');
const bestsellers = document.getElementById('bestsellers');
const thirdcat = document.getElementById('thirdcat');
fetch(APIURL)
    .then(response => response.json())
    .then(data => {
        let html = "";
        let sechtml = "";
        let thirdhtml = "";
        const secmovies = data.splice(0, 4);
        const movies = data.splice(0, 4);
        const thirdmovies = data.splice(0, 4);
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
        secmovies.forEach(movie => {
            sechtml += `<a href="details.html?id=${movie.id}">
            <div class="movie">
            <img src="${movie.image}">
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
        thirdmovies.forEach(movie => {
            thirdhtml += `<a href="details.html?id=${movie.id}">
            <div class="movie">
            <img src="${movie.image}">
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
        bestsellers.innerHTML = sechtml;
        thirdcat.innerHTML = thirdhtml;
    }).catch(error => {
        console.log(error);
    }
    );