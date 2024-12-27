import KnowledgeCard from "./KnowledgeCard"
import { Database } from "react-bootstrap-icons"


function Knowledge() {

  return (
    <main className="container">
      <h1 className="text-center mt-5 mb-4">Kunskap</h1>
      <p className="lead">Jag har bekantat mig med ett antal olika teknologier och jag gillar att lära mig nya och att födjupa mig för att ständigt utvecklas. Nedan redovisar jag några av de teknologier jag är mest bekväm med.</p>
      <hr />
      <section className="container my-5">
        <div className="row d-flex justify-content-around g-3">
          <KnowledgeCard
            mainIcon={<i className="devicon-dotnetcore-plain colored"></i>}
            minorIcons={[<i className="devicon-csharp-plain colored"></i>, <i className="devicon-microsoftsqlserver-plain colored"></i>]}
            title=".Net"
            text="C# för backend utveckling i Microsofts populära .Net Framework. Databashantering med ADO.Net och Entity Framework."
          />
          <KnowledgeCard
            mainIcon={<i className="devicon-visualstudio-plain colored"></i>}
            minorIcons={[<i className="devicon-csharp-plain colored"></i>, <i className="devicon-java-plain colored"></i>, <i className="devicon-python-plain colored"></i>, <i className="devicon-cplusplus-plain colored"></i>]}
            title="Backend utveckling"
            text="C# med microsofts .Net Framework. Java, Python och C++"
          />
          <KnowledgeCard
            mainIcon={<i className="devicon-vscode-plain colored"></i>}
            minorIcons={[<i className="devicon-javascript-plain colored"></i>, <i className="devicon-nodejs-plain colored"></i>, <i className="devicon-vitejs-plain colored"></i>, <i className="devicon-react-original colored"></i>]}
            title="Frontend utveckling"
            text="Frontend utveckling med Javascript och det populära frameworket React."
          />
          <KnowledgeCard
            mainIcon={<Database />}
            minorIcons={[<i className="devicon-mongodb-plain colored"></i>, <i className="devicon-microsoftsqlserver-plain colored"></i>]}
            title="Databashantering"
            text="Relationsdatabaser samt mer slimmade JSON databaser."
          />
          <KnowledgeCard
            mainIcon={<i className="devicon-css3-plain colored"></i>}
            minorIcons={[<i className="devicon-bootstrap-plain colored"></i>, <i className="devicon-sass-original colored"></i>]}
            title="UI-Design"
            text="Utblidning i kognitiv psykologi och användar design. Bygga gränsnitt med css, sass och UI-frameworks som Bootstrap."
          />     
        </div>
      </section>
    </main>
  )
}

export default Knowledge