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

    jokesContainer.innerHTML = "";

    for (let i = 0; i < jokes.length; i++) {
      jokesContainer.innerHTML += `<div class="card"><div class="card-type">${jokes[i].type}</div>
                                 <div class="card-setup">${jokes[i].setup}</div>
                                 <a href="joke.html?id=${jokes[i].id}" class="card-punchline"><h4>Get punchline</h4></div></div>`;
    }
  } catch (error) {
    jokesContainer.innerHTML = displayError("Shit happened, that is no joke");
  }
}

callApi();

const buttonProgramming = document.querySelector(".button1");

function link1() {
  console.log(link1);
}

buttonProgramming.oncklick = link1;
