import { Wind, DropletFill, CloudSnow, Search } from 'react-bootstrap-icons'

function WeatherCard() {

  return (
      <div className="card text-body bg-light">
        <div className="card-header">
          <form className="d-flex justify-content-end" action="#">
            <span className="m-1"><Search /></span>
            <input type="search" placeholder="Stad" />
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