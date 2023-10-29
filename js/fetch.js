const APIURL = "https://egwkacnv.elementor.cloud/wp-json/wc/store/products"
const trending = document.getElementById('trending');
fetch(APIURL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let html = "";
        const movies = data.slice(2, 6);
        movies.forEach(movie => {
            const price = movie.prices.price;
            const onSale = movie.prices.regular_price;
            if (price != onSale) {
                const newRegPrice = onSale / 100;
                const newPrice = price / 100;
                html += `<a href="details.html?id=${movie.id}">
                <div class="movie">
                <img src="${movie.images[0].src}" alt="${movie.name}">
                <div class="movie-box">
                <strong>${movie.name}</strong>
                <div class="details">
                <p class="price">${newPrice}kr <span class="oldprice">(${newRegPrice}kr)</span></p>
                </div>
                </div>
                </div>
                </a>
                `
            } else {
            const newPrice = price / 100;
            html += `<a href="details.html?id=${movie.id}">
            <div class="movie">
            <img src="${movie.images[0].src}" alt="${movie.name}">
            <div class="movie-box">
            <strong>${movie.name}</strong>
            <div class="details">
            <p class="price">${newPrice} kr</p>
            </div>
            </div>
            </div>
            </a>
            `
        }});
        trending.innerHTML = html;
    }).catch(error => {
        console.log(error);
    }
    );
 