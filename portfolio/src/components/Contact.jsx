import { useFormik } from 'formik'

function Contact() {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  return (
    <main className="container bg-light border mt-5">   
      <form className="row g-3 m-2" onSubmit={formik.handleSubmit}>
        <h1 className="text-center">Kontakt Formulär</h1>
        <div className="col-md-6">
          <label className="form-label" htmlFor="firstName">Förnamn</label>
          <input 
            className="form-control"
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="lastName">Efternamn</label>
          <input 
            className="form-control"
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="email">Email</label>
          <input 
            className="form-control"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="phone">Telefonummer</label>
          <input 
            className="form-control"
            id="phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </div>
        <div className="col-12">
          <label className="form-label" htmlFor="message">Medelande</label>
          <textarea
            className="form-control"
            name="message"
            id="message"
            onChange={formik.handleChange}
            value={formik.values.message}
          ></textarea>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Skicka</button>
        </div>
      </form>
    </main>
  )
}

export default Contact