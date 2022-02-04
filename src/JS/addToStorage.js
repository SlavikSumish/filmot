function getCurrentStorage() {
  let watched = localStorage.getItem('watched');
  let queue = localStorage.getItem('queue');
  if (watched === null) {
    watched = [];
  } else {
    watched = JSON.parse(watched);
  }
  if (queue === null) {
    queue = [];
  } else {
    queue = JSON.parse(queue);
  }
  return [watched, queue];
}


function addToStorage(filmObj, filmType) {
  const [watched, queue] = getCurrentStorage();
  const watchedId = watched.map(film => film.id);
  const queueId = queue.map(film => film.id);

  switch (filmType) {
    case 'watched':
      if (!watchedId.includes(filmObj.id)) {
        watched.push(filmObj);
        const filtrededQueue = queue.filter(film => {
          return film.id !== filmObj.id;
        });

        localStorage.setItem('watched', JSON.stringify(watched));
        localStorage.setItem('queue', JSON.stringify(filtrededQueue));
      } else {
        const filtrededWatched = watched.filter(film => {
          return film.id !== filmObj.id;
        });
        localStorage.setItem('watched', JSON.stringify(filtrededWatched));
      }
      break;
    case 'queue':
      if (!queueId.includes(filmObj.id)) {
        queue.push(filmObj);
        const filtrededWatched = watched.filter(film => {
          return film.id !== filmObj.id;
        });

        localStorage.setItem('watched', JSON.stringify(filtrededWatched));
        localStorage.setItem('queue', JSON.stringify(queue));
      } else {
        const filtrededQueue = queue.filter(film => {
          return film.id !== filmObj.id;
        });
        localStorage.setItem('queue', JSON.stringify(filtrededQueue));
      }
      break;
    default:
      console.log('Не коректно вказаний data-type');
  }
}

function saveAuthStateOnStorage(value) {
  localStorage.setItem('authState', value);
}


const resetStorage = function () {
  localStorage.removeItem('watched');
  localStorage.removeItem('queue');
};

const addToStorageFromBase = function (data) {
  if (data) {
    if (data.watched !== undefined) {
      localStorage.setItem('watched', JSON.stringify(data.watched));
    }
    if (data.queue !== undefined) {
      localStorage.setItem('queue', JSON.stringify(data.queue));
    }
  }
};

export {
  addToStorage,
  saveAuthStateOnStorage,
  resetStorage,
  addToStorageFromBase,
};