const container = document.querySelector(".joke-container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const url = "https://api.noroff.dev/api/v1/jokes" + id;

const corsEnabledUrl = "https://noroffcors.onrender.com/" + url + id;

async function fetchJoke() {
  try {
    const response = await fetch(url);
    const joke = await response.json();

    console.log(joke);

    const results = joke.id;

    console.log(results);

    createHtml(joke);
  } catch (error) {
    console.log(error);
  }
}

fetchJoke();

function createHtml(_result) {
  container.innerHTML = `<h1 class="card-type">${_result.type}</h1>
                            <div class="card-joke">${_result.setup}</div>
                            <div class="card-setup">${_result.punchline}<div>`;
}
