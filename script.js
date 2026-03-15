const movies = [
{
title:"Avengers Endgame",
genre:"Action",
year:"2019",
poster:"https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
description:"Superheroes assemble to defeat Thanos.",
trailer:"https://www.youtube.com/embed/TcMBFSGVi1c",
rating:0
},
{
title:"Joker",
genre:"Drama",
year:"2019",
poster:"https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
description:"Origin story of the Joker.",
trailer:"https://www.youtube.com/embed/zAGVQLHvwOY",
rating:0
},
{
title:"Interstellar",
genre:"Sci-Fi",
year:"2014",
poster:"https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
description:"A journey through space and time.",
trailer:"https://www.youtube.com/embed/zSWdZVtXT7E",
rating:0
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
<p>${movie.genre} | ${movie.year}</p>
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
