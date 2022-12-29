const container = document.querySelector(".joke-container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const url = "https://api.noroff.dev/api/v1/jokes/" + id;

console.log(url);

async function fetchJoke() {
  try {
    const response = await fetch(url);
    const joke = await response.json();

    console.log(joke);

    createHtml(joke);
  } catch (error) {
    console.log(error);
  }
}

fetchJoke();

function createHtml(joke) {
  container.innerHTML = `<div><h1 class="card-type">${joke.type}</h1>
                            <div class="card-joke">${joke.setup}</div>
                            <div class="card-setup">${joke.punchline}<div></div>`;
}

createHtml();
