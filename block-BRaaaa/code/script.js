let input = document.querySelector("input");
let root = document.querySelector("ul");

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

// display movies

function displayMovies(moviesArr = []) {
  root.innerHTML = "";
  moviesArr.forEach((elm, i) => {
    let li = document.createElement("li");
    li.classList.add("flex-1");
    let movieName = document.createElement("p");
    movieName.innerText = elm.name;
    movieName.classList.add("name");
    let options = document.createElement("p");
    let toggle = document.createElement("span");
    if (elm.isWatched === true) {
      toggle.innerText = "Watched"
      toggle.style.backgroundColor = "green"
    } else {
      toggle.innerText = "To Watch";
      toggle.style.backgroundColor = 'red';
    }
    toggle.setAttribute("data-id", i);
    toggle.addEventListener("click", handleToggle);
    let dlt = document.createElement("span");
    dlt.innerText = "Remove";
    dlt.setAttribute("data-id", i);
    dlt.addEventListener("click", handleDelete);
    options.append(toggle, dlt);
    li.append(movieName, options);
    root.append(li);
  })
}

// handle input

function handleInput(event) {
  if (event.keyCode === 13 && event.target.value) {
    moviesList.push({
      name: event.target.value,
      isWatched: false
    });
    event.target.value = "";
    displayMovies(moviesList);
  }
};

input.addEventListener("keyup", handleInput);

displayMovies(moviesList);