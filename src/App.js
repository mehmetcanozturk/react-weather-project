import React, { useEffect, useState } from "react";
import axios from "axios";
import Background from "./Background";


function App() {
  const [data, setData] = useState({})
  const [location, setlocation] = useState('')

  const URL = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=metric&appid=895284fb2d2c50a520ea537456963d9c'

  useEffect(() => {
    searchLocation();
  }, [location])

  const searchLocation = (event) => {

    axios.get(URL).then((response) => {
      setData(response.data)
      console.log(response.data)
    })

  }


  return <div className="app">
    <div className="background-image" id="bg-image">
      <Background data={data} />
    </div>
    <div className="search">
      <input value={location}
        onChange={event => setlocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter The City' type="text" />
    </div>
    <div className="container">
      <div className="top">
        <div className="location">
          <span>{data.name} <span className="bold">{data.sys && data.sys.country}</span></span>
        </div>
        <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
        </div>
        <div className="desc">
          {data.weather ? <p>{data.weather[0].description}</p> : null}
        </div>
      </div>

      {data.name !== undefined &&
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
            <p className='detail-text'>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p className='detail-text'>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
            <p className='detail-text'>Wind Speed</p>
          </div>
        </div>
      }
    </div>
  </div>;
}

export default App;
