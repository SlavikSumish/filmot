function getFromStorage(filmType) {
  switch (filmType) {
    case 'watched':
      let watched = localStorage.getItem('watched');
      if (watched === null) {
        watched = [];
      } else {
        watched = JSON.parse(watched);
      }
      return watched;
    case 'queue':
      let queue = localStorage.getItem('queue');
      if (queue === null) {
        queue = [];
      } else {
        queue = JSON.parse(queue);
      }
      return queue;
    case 'state':
      let state = localStorage.getItem('state');
      if (state === null) {
        return state;
      } else {
        return state;
      }
    default:
      console.log('Write correct type');
  }
}
export const getAuthStateFromStorage = function () {
  let authState = localStorage.getItem('authState');
  if (authState === null) {
    authState = [];
  }
  return authState;
};

export default getFromStorage;