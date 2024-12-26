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
            mainIcon={<i class="devicon-dotnetcore-plain colored"></i>}
            minorIcons={[<i class="devicon-csharp-plain colored"></i>, <i class="devicon-microsoftsqlserver-plain colored"></i>]}
            title=".Net"
            text="C# för backend utveckling i Microsofts populära .Net Framework. Databashantering med ADO.Net och Entity Framework."
          />
          <KnowledgeCard
            mainIcon={<i class="devicon-visualstudio-plain colored"></i>}
            minorIcons={[<i class="devicon-csharp-plain colored"></i>, <i class="devicon-java-plain colored"></i>, <i class="devicon-python-plain colored"></i>, <i class="devicon-cplusplus-plain colored"></i>]}
            title="Backend utveckling"
            text="C# med microsofts .Net Framework. Java, Python och C++"
          />
          <KnowledgeCard
            mainIcon={<i class="devicon-vscode-plain colored"></i>}
            minorIcons={[<i class="devicon-javascript-plain colored"></i>, <i class="devicon-nodejs-plain colored"></i>, <i class="devicon-vitejs-plain colored"></i>, <i class="devicon-react-original colored"></i>]}
            title="Frontend utveckling"
            text="Frontend utveckling med Javascript och det populära frameworket React."
          />
          <KnowledgeCard
            mainIcon={<Database />}
            minorIcons={[<i class="devicon-mongodb-plain colored"></i>, <i class="devicon-microsoftsqlserver-plain colored"></i>]}
            title="Databashantering"
            text="Relationsdatabaser samt mer slimmade JSON databaser."
          />
          <KnowledgeCard
            mainIcon={<i class="devicon-css3-plain colored"></i>}
            minorIcons={[<i class="devicon-bootstrap-plain colored"></i>, <i class="devicon-sass-original colored"></i>]}
            title="UI-Design"
            text="Utblidning i kognitiv psykologi och användar design. Bygga gränsnitt med css, sass och UI-frameworks som Bootstrap."
          />     
        </div>
      </section>
    </main>
  )
}

export default Knowledge