const API_KEY = `e633810a2a4bc43314dd81d6aca7e6b5`;

const loadtemperature= city=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res =>res.json())
    .then(data => displaytemperature(data));

}
const displaytemperature = data =>{
    // const temperature = document.getElementById('temp');
    // console.log(data.main.temp);
    // temperature.innerText = data.main.temp;
    // console.log(data.weather[0].main)
    setinnertextbyid('temperature', data.main.temp);
    setinnertextbyid('conditon', data.weather[0].main);
    console.log(data.weather[0].main)
}
const setinnertextbyid = (id, text) =>{
    const Temperature =document.getElementById(id);
    Temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchfield = document.getElementById('serach-field');
     const city =searchfield.value;
    //  set city 
    document.getElementById('city').innerText = city;
     loadtemperature(city)
})


loadtemperature('dhaka');