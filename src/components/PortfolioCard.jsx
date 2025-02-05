
function PortfolioCard({icon, title, text, link}) {

  return (
      <div className="card col-12 col-md-6 col-lg-4 bg-light knowledge-card w-25 mx-1">
        <div className="display-1 text-center pt-3">{icon}</div>
        <div className="card-body">
          <h5 className="card-title text-center">{title}</h5>
          <hr />
          <p className="card-text">{text}</p>
          <div className="text-center">
            <a href={link} className="btn btn-primary">Källkod</a>
          </div>
        </div>
      </div>
  )
}

export default PortfolioCard