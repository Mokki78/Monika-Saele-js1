/* const jokesContainer = document.querySelector(".jokes-container");

const jokeUrl = "https://api.noroff.dev/api/v1/jokes";

async function fetchJokes() {
  try {
    const response = await fetch(jokeUrl);
    const jokes = await response.json();

    console.log(jokes);
  } catch {}

  for (let i = 0; i < jokes.length; i++) {
    console.log(jokes[i]);
    jokesContainer.innerHTML = +`<div class="card-setup">${joke[i].setup}</div>
                                  <div class="card-type">${joke[i].type}</div>`;
  }
}

fetchJokes(); */

const jokesContainer = document.querySelector(".jokes-container");

const jokeUrl = "https://api.noroff.dev/api/v1/jokes";

async function callApi() {
  try {
    const response = await fetch(jokeUrl);
    const jokes = await response.json();

    console.log(jokes);

    for (let i = 0; i < jokes.length; i++) {
      jokesContainer.innerHTML += `<div class="card-type">${jokes[i].type}</div>
                                 <div class="card-setup">${jokes[i].setup}</div>`;
    }
  } catch (error) {
    console.log(error);
  }
}

callApi();
