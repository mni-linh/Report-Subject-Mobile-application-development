let rootURL = 'https://60980974e48ec00017873455.mockapi.io/api/listname';

//Go vao o tim kiem
exports.search = async function (q) {
  let url = `${rootURL}?search=${q}`;
  return fetch(url)
    .then((resp) => resp.json())
};

//Hien tat ca khi chua go tim kiem
exports.getAll = async function () {
  return fetch(rootURL)
  .then(response => response.json())
};

//Khi an vao 1 phim
exports.view = async function (id) {
  let url = `${rootURL}?imdbID=${id}`;
  return fetch(url).then((resp) => resp.json());
};
