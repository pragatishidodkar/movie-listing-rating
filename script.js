const container=document.getElementById("movieContainer")

function displayMovies(list){

container.innerHTML=""

list.forEach((movie,index)=>{

const card=document.createElement("div")

card.classList.add("movie-card")

card.innerHTML=`

<a href="movie.html?title=${encodeURIComponent(movie.title)}">

<img src="${movie.poster}">

</a>

<div class="movie-info">

<h3>${movie.title}</h3>

<p>${movie.genre} • ${movie.year}</p>

<div class="stars">

${createStars(index,movie.rating)}

</div>

</div>

`

container.appendChild(card)

})

}

function createStars(index,rating){

let stars=""

for(let i=1;i<=5;i++){

if(i<=rating){

stars+=`<span onclick="rateMovie(${index},${i})">★</span>`

}else{

stars+=`<span onclick="rateMovie(${index},${i})">☆</span>`

}

}

return stars

}

function rateMovie(index,value){

movies[index].rating=value

displayMovies(movies)

}

displayMovies(movies)


document.getElementById("search").addEventListener("input",(e)=>{

const term=e.target.value.toLowerCase()

const filtered=movies.filter(m=>m.title.toLowerCase().includes(term))

displayMovies(filtered)

})


function filterGenre(genre){

if(genre==="all"){

displayMovies(movies)

return

}

const filtered=movies.filter(m=>m.genre.includes(genre))

displayMovies(filtered)

}
