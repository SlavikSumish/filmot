const refs = {
  home: document.querySelector('.menu__list-link--home'),
  library: document.querySelector('.menu__list-link--library'),
  header: document.querySelector('.page-header'),
};

refs.library.addEventListener('click', onLibrary);
refs.home.addEventListener('click', onHome);

function onLibrary(e) {
  e.preventDefault();
  refs.header.innerHTML = markupLibrary();
  console.log('onLibrary');
  document.querySelector('.menu__list-link--library').addEventListener('click', onLibrary);
  document.querySelector('.menu__list-link--home').addEventListener('click', onHome);
}

function onHome(e) {
  e.preventDefault();
  refs.header.innerHTML = markupHome();
  console.log('onHome');
  document.querySelector('.menu__list-link--home').addEventListener('click', onHome);
  document.querySelector('.menu__list-link--library').addEventListener('click', onLibrary);
}

function markupLibrary() {
  return `<div class="container library-page-header__container">
    <div class="menu">
      <a href="" class="logo link">
        <svg width="24" height="24">
          <use href="./images/icons.svg#logo"></use>
        </svg>
        <span class="logo_label">Filmoteka</span>
      </a>
      <ul class="menu__list">
        <li class="menu__list-item">
          <a href="" class="menu__list-link menu__list-link--home  link"
            >Home</a>
        </li>
        <li class="menu__list-item">
          <a href="" class="menu__list-link menu__list-link--library menu__list-link--current link">My library</a>
        </li>
      </ul>
    </div>
    <div class="btn-box">
      <button class="library-btn">Watched</button>
      <button class="library-btn">Queue</button>
    </div>
  </div>`;
}

function markupHome() {
  return `<div class="container page-header__container">
    <div class="menu">
      <a href="/" class="logo link">
        <svg width="24" height="24">
          <use href="./images/icons.svg#logo"></use>
        </svg>
        <span class="logo_label">Filmoteka</span>
      </a>
      <ul class="menu__list list">
        <li class="menu__list-item">
         <a href="" class="menu__list-link menu__list-link--home menu__list-link--current link"
            >Home</a>
        </li>
        <li class="menu__list-item">
          <a href="" class="menu__list-link menu__list-link--library link">My library</a>
        </li>
      </ul>
    </div>
    <div class="form-box">
      <form class="form">
        <svg class="form__icon" width="12" height="12">
          <use href="./images/icons.svg#search"></use>
        </svg>
        <input type="text" name="text" class="search" placeholder="Поиск фильмов" />
      </form>
      <span class="form__error-message"></span>
    </div>
  </div>`;
}
