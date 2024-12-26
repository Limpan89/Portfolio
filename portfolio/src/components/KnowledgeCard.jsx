import './KnowledgeCard.css'

function KnowledgeCard({mainIcon, minorIcons, title, text}) {

  return (
    <div className="card col-12 col-md-6 col-lg-4 bg-light knowledge-card">
      <div className="display-1 text-center">{mainIcon}</div>
      <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
      <div className="container d-flex justify-content-around display-5">
        {minorIcons}
      </div>
    </div>
  )
}

export default KnowledgeCard