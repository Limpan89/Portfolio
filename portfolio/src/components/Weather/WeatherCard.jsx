import { Wind, DropletFill, Question, Sun, Cloud, CloudFog2 } from 'react-bootstrap-icons'
import WeatherSearch from './WeatherSearch'
import { useState } from 'react'
import { weatherCodes } from '../../constants'

function WeatherCard() {

  const [currentWeather, setCurrentWeather] = useState({})

	async function getWeatherData(API_URL) {
		try {
			const response = await fetch(API_URL)
			const data = await response.json()

      if (!response.ok)
        return

      const location = `${data.location.name}, ${data.location.country}`
      const localTime = data.location.localtime.slice(-5)
      const temperature = Math.floor(data.current.temp_c)
      const description = data.current.condition.text
      const humidity = data.current.humidity
      const wind = Math.round((0.277778 * data.current.wind_kph) * 10) / 10
      const weatherIcon = Object.keys(weatherCodes).find(icon => weatherCodes[icon].includes(data.current.condition.code))

      setCurrentWeather({location, localTime, temperature, description, humidity, wind, weatherIcon})
      console.log(weatherIcon)
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}

  return (
      <div className="card bg-light">
        <WeatherSearch getWeatherData={getWeatherData} />
        <div className="card-body p-4">
          <div className="d-flex">
            <h6 className="flex-grow-1">{currentWeather.location}</h6>
            <h6>{currentWeather.localTime}</h6>
          </div>
          <div className="d-flex flex-column text-center mt-5 mb-4">
            <h6 className="display-4">{currentWeather.temperature}°C</h6>
            <span className="small">{currentWeather.description}</span>
          </div>
          <div className="d-flex align-items-center">
            <div className="flex-grow-1">
              <div>
                <Wind />
                <span className="ms1"> {currentWeather.wind} m/s</span>
              </div>
              <div>
                <DropletFill />
                <span className="ms1"> {currentWeather.humidity}% </span>
              </div>
            </div>
            <div>
            <img
              src={`src/assets/icons/${currentWeather.weatherIcon ? currentWeather.weatherIcon : 'question'}.svg`}
              className=""
              type="image/svg+xml"
              width="75"
              height="75"
            />
            </div>
          </div>
        </div>
      </div>
  )
}

export default WeatherCard