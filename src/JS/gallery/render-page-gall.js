import { fetchMovies, fetchGenres } from "../gallery/fetch-gallery";
import { MoviesCards } from "../gallery/gallery-tpl";



fetchMovies().then(response => {
    response.results
    MoviesCards(response.results);
    console.log(response.results)    
});

fetchGenres().then(response => {
    console.log(response.genres);
})

