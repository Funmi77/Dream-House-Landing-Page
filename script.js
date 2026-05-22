function showAnswer(response) {
  console.log(response.data.answer);

  let details = document.querySelector("#details");

  new Typewriter("#details", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

let apiKey = "7e77fbbbab91e5504tfaaa75643of118";

let prompt =
  "Give me the best architectural description of a Retro Modern Dream Home.";

let context = "Provide a clear and precise answer in exactly four lines.";

let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let button = document.querySelector("#getDetails");

button.addEventListener("click", function (event) {
  event.preventDefault();

  let details = document.querySelector("#details");

  details.innerHTML = "Generating dream home details...";

  axios.get(apiUrl).then(showAnswer);
});
