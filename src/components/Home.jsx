function Home() {
  const BASE_URL = import.meta.env.BASE_URL;
  console.log(BASE_URL);
  return (
    <main className="container mt-5">
      <div className="text-center">
        <h1>Linus Brobäck</h1>
        <hr />
        <p className="lead">
          Hej! Välkommen till min profilsida! Jag är en .Net student på
          Nackademins Yrkeshögskola.
        </p>
      </div>
      <div className="row d-flex justify-content-center py-5 g-3">
        <div className="col-md-8 col-lg-6 col-xl-5">
          <img src={BASE_URL + "profileImage.JPG"} alt="Profilbild" />
          <img src={BASE_URL + "public/profileImage.JPG"} alt="Profilbild" />
          <img src="public/profileImage.JPG" alt="Profilbild" />
        </div>
      </div>
    </main>
  );
}

export default Home;
