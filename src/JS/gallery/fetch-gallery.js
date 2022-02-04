const keyAPI = '89b7d98b05de36091af2815feb76deb7'


export function fetchMovies() {
    return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${keyAPI}`)
        .then(resp => resp.json());
}

export function fetchGenres() {
    return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${keyAPI}&language=en-US`)
        .then(resp => resp.json());
}

