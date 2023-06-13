const APIURL = "https://api.noroff.dev/api/v1/square-eyes"
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
        movietitle.innerHTML = data.title;
        price.innerHTML = data.price;
        price2.innerHTML = Math.floor(data.price / 2);
        price3.innerHTML = Math.floor(data.price / 3);
        moviedesc.innerHTML = data.description;
        rank.innerHTML = data.rating;
        aw1.innerHTML = data.tags[0];
        aw2.innerHTML = data.tags[1];
        if (data.favorite == true) {
            heart.style.display = "none";
            blackheart.style.display = "block";
        }
        moviepic.setAttribute("src", data.image);
        moviepic.setAttribute("alt", data.title);
        release.innerHTML = data.released;
        checkout.setAttribute("href", "checkout.html?id=" + data.id);
        document.title = data.title + " | Square Eyes";
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
