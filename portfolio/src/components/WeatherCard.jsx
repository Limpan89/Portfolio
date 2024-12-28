import { Wind, DropletFill, CloudSnow, Search } from 'react-bootstrap-icons'
import { useFormik } from 'formik'

function validateSearch(values) {
  const errors = {}

  if (!values.citySearch)
    errors.citySearch = 'Ange en stad!'

  return errors
}

function WeatherCard() {

  const formik = useFormik({
    initialValues: {
      citySearch: ''
    },
    validate: validateSearch,
    onSubmit: values => {
      getWeatherData(getApiUrl(values.citySearch))
    }
  })

  // api nyckl finns bara här för att stefan enkelt ska kunna testa väderapplikationen, annars skulle den ligga undanstoppad i .env :)
  const API_KEY = "0bfa789c835c4c8badd03211242812"

  function getApiUrl(city) {
    return `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}}`
  }

	async function getWeatherData(API_URL) {
		try {
			const response = await fetch(API_URL)
			const data = await response.json()

			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}

  return (
      <div className="card text-body bg-light">
        <div className="card-header">
          <form className="d-flex justify-content-end" action="#" onSubmit={formik.handleSubmit}>
            <label className="formLabel" htmlFor="citySearch"><Search /></label>
            <input
              className="form-control"
              id="citySearch"
              type="search"
              placeholder="Stad ex. Stockholm"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
          </form>
        </div>
        <div className="card-body p-4">
          <div className="d-flex">
            <h6 className="flex-grow-1">Stockholm</h6>
            <h6>13:15</h6>
          </div>
          <div className="d-flex flex-column text-center mt-5 mb-4">
            <h6 className="display-4">27°C</h6>
            <span className="small">Snowy</span>
          </div>
          <div className="d-flex align-items-center">
            <div className="flex-grow-1">
              <div>
                <Wind />
                <span className="ms1"> 10 m/s</span>
              </div>
              <div>
                <DropletFill />
                <span className="ms1"> 70% </span>
              </div>
            </div>
            <div className="display-2">
              <CloudSnow />
            </div>
          </div>
        </div>
      </div>
  )
}

export default WeatherCard