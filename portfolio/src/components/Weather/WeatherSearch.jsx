import { useFormik } from 'formik'

function validateSearch(values) {
  const errors = {}

  if (!values.citySearch)
    errors.citySearch = 'Ange en stad!'

  return errors
}

function WeatherSearch({getWeatherData}) {

    // api nyckl finns bara här för att stefan enkelt ska kunna testa väderapplikationen, annars skulle den ligga undanstoppad i .env :)
  const API_KEY = "0bfa789c835c4c8badd03211242812"

  function getApiUrl(city) {
    return `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}}`
  }

  const formik = useFormik({
    initialValues: {
      citySearch: ''
    },
    validate: validateSearch,
    onSubmit: values => {
      getWeatherData(getApiUrl(values.citySearch))
    }
  })

  return (
    <div className="card-header">
          <form className="" action="#" onSubmit={formik.handleSubmit}>
            <label className="form-input" htmlFor="citySearch">Stad</label>
            <input
              className="form-control"
              id="citySearch"
              type="search"
              placeholder="ex. Stockholm"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
          </form>
        </div>
  )
}