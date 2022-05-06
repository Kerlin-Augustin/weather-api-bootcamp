document.querySelector('button').addEventListener('click', getTemp)

function getTemp(){
  let cityTemp = document.querySelector('input').value
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityTemp}&appid=6d7ac0a3f6c57425cd4f58fff9a5b1eb&units=imperial`



fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.querySelector('h2').innerText = data.name
    // document.querySelector('img').src = data.hdurl
    document.querySelector('h3').innerText = data.main.temp
  }) 
  .catch(err => {
    console.log(`error ${err}`)
  })

}