/* Global Variables */
let baseURL ='https://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey ='&appid=3af15f3ff9f3a4aac51830de9b869560';
const userin=document.getElementById('feelings').value;
document.getElementById('generate').addEventListener('click', performanAction);

function performanAction(){
    const newzipcode = document.getElementById('zip').value;
    const userin= document.getElementById('feelings').value;
    getWeather(baseURL,newzipcode,apiKey)

    //Chaning Promises
    .then(function(data) {
        //console.log(data);
        postData('/dataon',{cont:data.sys.country , city:data.name, temperature:data.main.temp, date:d, userin:userin })

        //Updating UI
        updateUI()
    });
    };

    const getWeather = async (baseURL,newzipcode,apikey)=>{
      const res = await fetch(baseURL+newzipcode+apikey)
      try {
        //note that data array is blocked to ithe scope
        const data = await res.json();
        console.log(data);
        return data;
      }
      catch(error) {
        console.log("error", error);
        // appropriately handle the error
      }
    }

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
console.log(d);

//Create a POST Route
const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },

     // Body data type must match "Content-Type" header so use JSON.stringfy       
      body: JSON.stringify(data), 
    });
      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

  //Update UI Function
  const updateUI = async () => {
    const request = await fetch('/all');
    try{
      const data = await request.json();

      //Looping on data array
      for (let i in data) {
        //Converting Kelvin to Celsius 
        let celsius = ((data[i].temperature) - 273.15);
        celsius = celsius.toFixed(2);
      document.getElementById('city').innerHTML ="You are in : " + data[i].city + ", " + data[i].cont;
      document.getElementById('date').innerHTML = "Temperature is : " + data[i].temperature + " Kelvin / " + celsius + " Celsius";
      document.getElementById('temp').innerHTML ="Today is : " + d;
      document.getElementById('content').innerHTML ="You Feel like : " + data[i].userin;
      }
    }

    catch(error){
      console.log("error", error);
      alert('error');
    }
  }