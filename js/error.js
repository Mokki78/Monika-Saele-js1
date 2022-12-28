const jokesContainer = document.querySelector(".jokes-container");

const jokeUrl = "https://api.noroff.dev/api/v1/jokes";

async function fetchJokes() {
  try {
    const response = await fetch(jokeUrl);
    const jokes = await response.json();

    console.log(jokes);
  } catch {}
}
