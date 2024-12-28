import { useFormik } from 'formik'

function validateForm(values) {
  const errors = {};

  if (!values.firstName) 
    errors.firstName = 'Krävs!'
  else if (values.firstName.length > 15)
    errors.firstName = 'Kan vara högst 15 tecken'

  if (!values.lastName)
    errors.lastName = 'Krävs!'
  else if (values.lastName.length > 20)
    errors.lastName = 'Kan vara högst 20 tecken'

  if (!values.email)
    errors.email = 'Krävs!'
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    errors.email = 'Felaktigt emailadress'

  if (!values.phone)
    errors.phone = 'Krävs!'
  else if (!/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i.test(values.phone))
    errors.phone = 'Felaktigt telefonnummer'

  return errors
}

function Contact() {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    },
    validate: validateForm,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  return (
    <main className="container mt-5">   
      <h1 className="text-center">Kontakt</h1>
      <hr />
      <form className="row g-3 bg-light border mt-1" onSubmit={formik.handleSubmit}>
        <h4 className="text-center">Kontakt formulär</h4>
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
          {formik.errors.firstName ? <div className="text-danger">{formik.errors.firstName}</div> : null}
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
          {formik.errors.lastName ? <div className="text-danger">{formik.errors.lastName}</div> : null}
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
          {formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
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
          {formik.errors.phone ? <div className="text-danger">{formik.errors.phone}</div> : null}
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
        <div className="col-12 mb-3">
          <button className="btn btn-primary" type="submit">Skicka</button>
        </div>
      </form>
    </main>
  )
}

export default Contact