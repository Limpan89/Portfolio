import WeatherCard from "./Weather/WeatherCard"

function Home() {

  return (
    <main className="container mt-5">
      <div className="text-center">
        <h1>Linus Brobäck</h1>
        <hr />
        <p className="lead">Hej! Välkommen till min profilsida! Jag är en .Net student på Nackademins Yrkeshögskola.</p>
      </div>
      <div className="row d-flex justify-content-center py-5 g-3">
        <div className="col-md-8 col-lg-6 col-xl-5">
          <img src="./src/assets/ProfileImage.jpg" alt="Profilbild" />
        </div>
        <div className="col-md-8 col-lg-6 col-xl-5">
          <h3 className="text-center">Väder applikation</h3>
          <WeatherCard />
        </div>
      </div>


    </main>
  )
}

export default Home