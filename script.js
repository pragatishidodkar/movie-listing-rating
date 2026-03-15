const movies = [

{
title:"The Dark Knight",
genre:"Action",
year:"2008",
poster:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
description:"Batman faces the Joker in Gotham City.",
trailer:"https://www.youtube.com/embed/EXeTwQWrcwY",
rating:9
},

{
title:"Inception",
genre:"Sci-Fi",
year:"2010",
poster:"https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
description:"A thief enters people's dreams to steal secrets.",
trailer:"https://www.youtube.com/embed/YoHD9XEInc0",
rating:8
},

{
title:"Interstellar",
genre:"Sci-Fi",
year:"2014",
poster:"https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
description:"Explorers travel through a wormhole in space.",
trailer:"https://www.youtube.com/embed/zSWdZVtXT7E",
rating:8
},

{
title:"Joker",
genre:"Drama",
year:"2019",
poster:"https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
description:"Origin story of the Joker.",
trailer:"https://www.youtube.com/embed/zAGVQLHvwOY",
rating:8
}

];


const container = document.getElementById("movieContainer");


function displayMovies(list){

container.innerHTML="";

list.forEach((movie,index)=>{

const card=document.createElement("div");

card.classList.add("movie-card");

card.innerHTML=`

<img src="${movie.poster}">

<div class="movie-info">

<h3>${movie.title}</h3>

<p>${movie.genre} • ${movie.year}</p>

<span class="rating-badge">${movie.rating}</span>

<div class="stars">${createStars(index)}</div>

</div>

`;

card.onclick=()=>openModal(movie);

container.appendChild(card);

});

}


function createStars(index){

let stars="";

for(let i=1;i<=5;i++){

stars+=`<span onclick="rateMovie(${index},${i})">★</span>`;

}

return stars;

}


function rateMovie(index,value){

movies[index].rating=value;

displayMovies(movies);

}


displayMovies(movies);


const modal=document.getElementById("movieModal");

const close=document.querySelector(".close");


function openModal(movie){

modal.style.display="block";

document.getElementById("modalTitle").innerText=movie.title;

document.getElementById("modalDesc").innerText=movie.description;

document.getElementById("modalTrailer").src=movie.trailer;

}


close.onclick=()=>{

modal.style.display="none";

}


window.onclick=(e)=>{

if(e.target==modal)

modal.style.display="none";

}


document.getElementById("search").addEventListener("keyup",(e)=>{

const value=e.target.value.toLowerCase();

const filtered=movies.filter(m=>m.title.toLowerCase().includes(value));

displayMovies(filtered);

});
