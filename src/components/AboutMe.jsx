function AboutMe() {
  return (
    <main className="container mt-5">
      <h1 className="text-center">About Me</h1>
      <hr />
      <p className="lead">
        Jag är född och uppvuxen här i Stockholm. Jag älskar staden hur den har
        en rik historia men samtidigt blickar mot framtiden och anammar nya
        tekniker. Själv är jag mycket detsamma då jag älskar historia men även
        brinner för ny teknik.
      </p>
      <p>
        Jag har tampats med depression under flera år och har upplevt på första
        hand hur teknologi kan både vara positivt och negativt för vår mentala
        hälsa. Jag vill göra mitt för att bygga teknologi som hjälper människor.
      </p>
      <img
        className="rounded mx-auto d-block"
        src="src/assets/profileImage.JPG"
        alt="profil bild"
      />
    </main>
  );
}

export default AboutMe;
