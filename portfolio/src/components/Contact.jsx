
function Contact() {

  return (
    <main className="container bg-light border mt-5">   
      <form className="row g-3 m-2" noValidate>
        <h1 className="text-center">Kontakt Formulär</h1>
        <div className="col-md-6">
          <label className="form-label" htmlFor="firstName">Förnamn</label>
          <input className="form-control" id="firstName" name="firstName" type="text" />
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="lastName">Efternamn</label>
          <input className="form-control" id="lastName" name="lastName" type="text" />
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="email">Email</label>
          <input className="form-control" id="email" name="email" type="email" />
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="phone">Telefonummer</label>
          <input className="form-control" id="phone" name="phone" type="text" />
        </div>
        <div className="col-12">
          <label className="form-label" htmlFor="message">Medelande</label>
          <textarea className="form-control" name="message" id="message"></textarea>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Skicka</button>
        </div>
      </form>
    </main>
  )
}

export default Contact