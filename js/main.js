let countrydiv = document.getElementById('country')
countrydiv.textContent = "España"

/*
const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
fetchPromise.then(response => {
  return response.json();
}).then(people => {
  const names = people.map(person => person.name).join("\n");
  console.log(names);
});
*/


const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
fetchPromise.then(response => {
  console.log(response.json());
})

const fetchPromise2 = fetch("https://freegeoip.app/json/");
fetchPromise2.then(response => {
  console.log(response.json());
})


const fetchPromise3 = fetch("http://api.open-notify.org/iss-now.json");
fetchPromise3.then(response => {
  console.log(response.json());
})

const fetchPromise4 = fetch("https://api.openweathermap.org/data/2.5/weather?q=Arbucies&appid=1866411b5b586495c200d03f6cfa7a77");
fetchPromise4.then(response => {
  console.log(response);
})

// https://freegeoip.app/json/