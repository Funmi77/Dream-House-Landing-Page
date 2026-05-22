function showAnswer(response) {
  console.log(response.data.answer);
  let details = document.querySelector("#details");
  details.innerHTML = "";

  new Typewriter("#details", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let apiKey = "7e77fbbbab91e5504tfaaa75643of118";
let prompt =
  "Give me the best Architectural description of a Retro Modern Dream Home.";
let context =
  "Provide clear and precise answer in just four lines.Make it four lines.";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let button = document.querySelector("#getDetails");
button.addEventListener("click", (event) => {
  event.preventDefault();
  axios.get(apiUrl).then(showAnswer);
});
