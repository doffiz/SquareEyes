const APIURL = "https://egwkacnv.elementor.cloud/wp-json/wc/store/products"
const trending = document.getElementById('trending');
const bestsellers = document.getElementById('bestsellers');
const moviepic = document.getElementById('moviepic');
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const checkoutbutton = document.getElementById('checkoutbutton');
fetch(APIURL + "/" + id)
    .then(response => response.json())
    .then(data => {
        moviepic.setAttribute("src", data.images[0].src);
        moviepic.setAttribute("alt", data.name);
        checkoutbutton.setAttribute("href", "thankyou.html?id=" + data.id);
    }).catch(error => {
        console.log(error);
    });
    fetch(APIURL)
        .then(response => response.json())
        .then(data => {
            let html = "";
            const movies = data.splice(1, 4);
            movies.forEach(movie => {
                html += `<a href="details.html?id=${movie.id}">
                <div class="movie">
                <img src="${movie.images[0].src}" alt="${movie.name}">
                <div class="movie-box">
                <strong>${movie.name}</strong>
                <div class="details">
                <p class="price">${movie.prices.price / 100 }kr</p>
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