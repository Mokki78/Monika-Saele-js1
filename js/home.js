const jokesContainer = document.querySelector(".jokes-container");
const jokeUrl = "https://api.noroff.dev/api/v1/jokes";

let jokes = [];
let type = "all";

async function getAllJokes() {
  try {
    const response = await fetch(jokeUrl);
    jokes = await response.json();

    console.log(jokes);

    displayJokes(type);
  } catch (error) {
    alert("Shit happened, that is no joke");
  }
}

getAllJokes();

function displayJokes(type) {
  const jokesToDisplay = getJokes(type);
  jokesContainer.innerHTML = "";

  for (let i = 0; i < jokesToDisplay.length; i++) {
    const joke = jokesToDisplay[i];
    jokesContainer.innerHTML += `<div class="card"><div class="card-type">${joke.type}</div>
                               <div class="card-setup">${joke.setup}</div>
                               <a href="joke.html?id=${joke.id}" class="card-punchline"><h4>Get punchline</h4></div></div>`;
  }
}

function getJokes(type) {
  if (type !== "all") return jokes.filter((joke) => joke.type === type);

  return jokes;
}
