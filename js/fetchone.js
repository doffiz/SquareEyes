const APIURL = "https://egwkacnv.elementor.cloud/wp-json/wc/store/products"
const movietitle = document.getElementById('movietitle');
const price = document.getElementById('price');
const price2 = document.getElementById('price2');
const price3 = document.getElementById('price3');
const moviedesc = document.getElementById('moviedesc');
const rank = document.getElementById('rank');
const aw1 = document.getElementById('aw1');
const aw2 = document.getElementById('aw2');
const heart = document.getElementById('heart');
const blackheart = document.getElementById('blackheart');
const moviepic = document.getElementById('moviepic');
const release = document.getElementById('release');
const checkout = document.getElementById('checkout');



const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

fetch(APIURL + "/" + id)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        movietitle.innerHTML = data.name;
        price.innerHTML = data.prices.price / 100 + " kr";
        price2.innerHTML = Math.floor(data.prices.price / 100 / 2) + " kr";
        price3.innerHTML = Math.floor(data.prices.price / 100 / 3) + " kr";
        moviedesc.innerHTML = data.description;
        if (data.tags != "") {
            aw1.innerHTML = data.tags[0];
            aw2.innerHTML = data.tags[1];
        } else {
            aw1.style.display = "none";
            aw2.style.display = "none";
        }
        moviepic.setAttribute("src", data.images[0].src);
        moviepic.setAttribute("alt", data.title);
        checkout.setAttribute("href", "checkout.html?id=" + data.id);
        document.title = data.name + " | Square Eyes";
    }).catch(error => {
        console.log(error);
    }
    )

heart.addEventListener("click", function () {
    heart.style.display = "none";
    blackheart.style.display = "block";
}
)
blackheart.addEventListener("click", function () {
    heart.style.display = "block";
    blackheart.style.display = "none";
}
)
