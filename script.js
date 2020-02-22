document.getElementById("NewCatPictureSubmit").addEventListener("click", function(event) {
event.preventDefault();
// const value = document.getElementById("weatherInput").value;
// if (value === "")
//   return;
// console.log(value);

const url = "https://api.thecatapi.com/v1/images/search";

fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {

    // console.log to show what is in the json
    console.log(json);

    let results = "";
    results += '<img src = "';
    results += json[0].url;
    results += '" class="responsiveIMG"/>';

    // results += '<img src="' + json[0].url + '"/>';
    document.getElementById("NewCatPictureResult").innerHTML = results;

  });
});
