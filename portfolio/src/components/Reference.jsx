import { Headset, MortarboardFill } from "react-bootstrap-icons"

function Reference() {

  return (
    <main className="container bg-light mt-5">
      <h1 className="text-center">Referenser</h1>
      <hr />
      <article className="container row">
        <h2>Utbildning</h2>
        <div className="display-1 col-2">
          <MortarboardFill />
        </div>
        <div className="col-10">
          <h3>Stockholms Universistet, DSV</h3>
          <p className="lead">Data- och Systemvetenskap, Kandidat</p>
          <p>2019-2020</p>
        </div>
        <div className="display-1 col-2">
          <MortarboardFill />
        </div>
        <div className="col-10">
          <h3>Nackademin</h3>
          <p className="lead">Programutvecklare .Net, YH</p>
          <p>2024-2026</p>
        </div>
        <h2>Erfarenhet</h2>
        <div className="display-1 col-2">
          <Headset />
        </div>
        <div className="col-10">
          <h3>Provioce</h3>
          <p className="lead">Telefonförsäljare</p>
          <p>2008</p>
        </div>
      </article>
    </main>
  )
}

export default Reference