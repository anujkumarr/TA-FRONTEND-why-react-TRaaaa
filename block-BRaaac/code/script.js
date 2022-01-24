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


// elm function

function createElement(type, attr={ }, ...children) {
  let element = document.createElement(type);
  for (let key in attr) {
    if (key.startsWith("data-")){
      element.setAttribute(key, attr[key]);
    } else if (key.startsWith("on")) {
      let eventType = key.replace("on", "");
      element.addEventListener(eventType, attr[key])
    } else {
      element[key] = attr[key];
    }
  }
  children.forEach((child) => {
    if (typeof child === "object") {
      element.append(child)
    };
    if (typeof child === "string") {
      let textNode = document.createTextNode(child);
      element.append(textNode);
    }
  })
  return element;
}

// display movies

function displayMovies(moviesArr = []) {
  root.innerHTML = '';
  moviesArr.forEach((elm, i) => {
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
      ), createElement('p', {}, createElement('span', {
        'data-id': i,
        onclick: handleToggle
      }, elm.isWatched ? "Watched" : "To Watched")),
      createElement('span', {
        'data-id': i,
        onclick: handleDelete,
        innerText: 'Remove'
      })
    );
    root.append(li);
  });
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
