import './Home.css'

function Home() {

  return (
    <main className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column text-center">
      <div className="px-3">
        <section className="inner cover">
          <h1 className="cover-heading">Linus Brobäck</h1>
          <hr />
          <p className="lead">Hej! Välkommen till min profilsida! Jag är en .Net student på Nackademins Yrkeshögskola.</p>
        </section>
      </div>
      <img src="./src/assets/ProfileImage.jpg" alt="" />
    </main>
  )
}

export default Home