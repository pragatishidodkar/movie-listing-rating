card.innerHTML = `
<img src="${movie.poster}">

<div class="movie-info">

<h3>${movie.title}</h3>

<p>${movie.genre} • ${movie.year}</p>

<span class="rating-badge">${movie.rating || "N/A"}</span>

<div class="stars">
${createStars(index)}
</div>

</div>
`;
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
description:"A thief enters dreams to steal secrets.",
trailer:"https://www.youtube.com/embed/YoHD9XEInc0",
rating:8
},
