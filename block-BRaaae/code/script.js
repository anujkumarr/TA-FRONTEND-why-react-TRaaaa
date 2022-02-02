let input = document.querySelector('input');
let root = document.querySelector('ul');

// state to store data

let moviesList = [];

// handle watched / unwatched

function handleToggle(event) {
  let id = event.target.dataset.id;
  moviesList[id].isWatched = !moviesList[id].isWatched;
  displayMovies(moviesList);
}

// Handling Delete

function handleDelete(event) {
  let id = event.target.dataset.id;
  moviesList.splice(id, 1);
  displayMovies(moviesList);
}

// create element function via react

let createElement = React.createElement;


// display movies

function displayMovies(moviesArr = []) {
 let movie = moviesArr.map((elm, i) => {
    let li = createElement(
      'li',
      {
        className: 'flex-1',
      },
      createElement(
        'p',
        {
          className: 'name',
        },
        elm.name
      ),
      createElement(
        'p',
        {},
        createElement(
          'span',
          {
            'data-id': i,
            onClick: handleToggle,
          },
          elm.isWatched ? 'Watched' : 'To Watched'
        )
      ),
      createElement('span', {
        'data-id': i,
        onClick: handleDelete,
      },'Remove')
    );
    return li;
 });
  ReactDOM.render(movie, root);
}

// handle input

function handleInput(event) {
  if (event.keyCode === 13 && event.target.value) {
    moviesList.push({
      name: event.target.value,
      isWatched: false,
    });
    event.target.value = '';
    displayMovies(moviesList);
  }
}

input.addEventListener('keyup', handleInput);

displayMovies(moviesList);
