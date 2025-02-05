import PortfolioCard from "./PortfolioCard"

function Portfolio() {

  return (
    <main className="container mt-5">
      <h1 className="text-center">Portfölj</h1>
      <hr />
      <div className="row d-flex justify-content-around g-3">
        <PortfolioCard
          icon={<i className="devicon-csharp-plain colored"></i>}
          title="TextGame"
          text="Ett textbaserat spel skrivet i C# som spelas i kommandotolken. Inspirerat av tidiga spel likt Zork."
          link="https://github.com/Limpan89/TextGame"
        />
        <PortfolioCard
          icon={<i className="devicon-bootstrap-plain colored"></i>}
          title="Hedelige Harrys Bilar"
          text="En storepage stylad med Bootstrap. Ett grupp projekt där jag sammarbetade med flera andra talangfula individer."
          link="https://github.com/lullak/HederligeHarrys"
        />
        <PortfolioCard
          icon={<i className="devicon-python-plain colored"></i>}
          title="Maze Solver"
          text="Ett program skrivet i python som bygger upp en labyrint och sedan löser den."
          link="https://github.com/Limpan89/maze-solver"
        />
      </div>
    </main>
  )
}

export default Portfolio