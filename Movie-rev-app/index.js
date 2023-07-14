import { createMovieContainer } from "./createCardContainer.js";


const movieContainer = document.querySelector(".movie-container");
const search = document.getElementById("search-input");
const movieRating = document.getElementById("rating-select");
const movieGenres = document.getElementById("genre-select");
const URL = "https://movies-app.prakashsakari.repl.co/api/movies";

const movieData = async (url)=> {
 try {
    const res = await axios.get(url);
    console.log(res.data);
    return res.data;
 } catch (error) {
    error = new Error("Something Went Wrong");
    return error;
 }
}
let searchText = "";
let filterSearchedArray = [];
let rating = 0;
let genre = "";
const movies = await movieData(URL);

const genres = movies.reduce((acc, curr)=> {
    let genreArr = [];
    let tempGenresArr = curr.genre.split(",");
    acc = [...acc, ...tempGenresArr];
    for(let genre of acc){
        if(!genreArr.includes(genre)){
                genreArr = [...genreArr, genre];
        }
    } return genreArr;
}, []);

for(let genre of genres){
    let option = document.createElement("option");
    option.classList.add("option");
    option.setAttribute("value", genre);
    option.innerText = genre;
    movieGenres.appendChild(option);
}
console.log(genres);

function getData(){
filterSearchedArray = searchText?.length>0 ? 
(movies.filter((movie)=> movie.name.toLowerCase().includes(searchText)||
movie.director_name.toLowerCase().includes(searchText)||
movie.writter_name.toLowerCase().includes(searchText)||
movie.cast_name.toLowerCase().includes(searchText))
) : movies;
  


if(rating > 0){
    filterSearchedArray = searchText?.length > 0 ? filterSearchedArray : movies;
    filterSearchedArray = filterSearchedArray.filter((movie)=> movie.imdb_rating >= rating );
}

else if(genre?.length > 0){
 filterSearchedArray = searchText?.length > 0 && rating> 7 ? filterSearchedArray : movies;
 filterSearchedArray = filterSearchedArray.filter((movie)=> movie.genre.includes(genre  ));
}
return filterSearchedArray;
}



const handleClick = (e) => {
     searchText = e.target.value.toLowerCase();
    console.log(searchText);
    let filteredArray = getData();
     movieContainer.innerHTML = "";
    createMovieContainer(movieContainer, filteredArray);

  }
  const handleRatingSelector = (e)=> {
    rating = e.target.value;
    let filterRating = getData();
    movieContainer.innerHTML = "";
    createMovieContainer(movieContainer , filterRating );
  }
  const handleGenreSelector = (e)=> {
          genre = e.target.value;
          const filteredGenre = getData();
          movieContainer.innerHTML = "";
          createMovieContainer(movieContainer, genre ? filteredGenre: movies); 
  }
  search.addEventListener("input", handleClick);
  movieRating.addEventListener("change", handleRatingSelector);
  movieGenres.addEventListener("change", handleGenreSelector);

createMovieContainer(movieContainer, movies);