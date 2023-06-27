const apiKey = "a4adf79fb7dd52f4db0fe1fc7f243460";
// let city_name = document.getElementById('search-btn')
let city_name = document.getElementById('text')


function searchFunction(searchTerm) {
  console.log(`Searching for ${searchTerm}...`);
  fetch(
    ` http://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=5&appid=${apiKey}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
    console.log(data)
    let lat = data[0].lat 
    let lon = data[0].lon 
    console.log(lat, lon)
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    ).then((res)=> {
        return res.json();
    }).then((data)=> {
        console.log(data)
    });
   }
    )
    .catch((err) => {
      console.log(err);
    });
}

window.addEventListener("DOMContentLoaded", (e) => {
  const btn = document.querySelector("#search-btn");
  const input = document.querySelector("#search");

  btn.addEventListener("click", (e) => {
    // get value of input field first
    console.log(input.value)
    searchFunction(input.value); 
 });
  input.addEventListener("keyup", (e) => searchFunction(e.target.value));

});
