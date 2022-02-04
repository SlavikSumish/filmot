const refs = {
    cardList: document.querySelector('.card-list')
}

export function MoviesCards (results){
  const markup = results.map(
    ({ title, id, poster_path, release_date, genre_ids }) => {
      return `<li class="list card-item">
            <a href="" class="link"></a>
            <div class="image_thumb">
                <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" id="${id}" loading="lazy">
                <div class="content">
                <h2 class="content_title">${title}</h2>
                <p class="content_text">${genre_ids} | ${release_date}</p>
            </div>
            </div>
            
        </li>`}).join(' ');
  refs.cardList.innerHTML = markup;
};

