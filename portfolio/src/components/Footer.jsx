import { Linkedin, Facebook, Github, CCircle } from 'react-bootstrap-icons'
import FooterIconItem from './FooterIconItem'


function Footer() {

  return (
    <footer className="bg-body-tertiary text-center fixed-bottom">
      <div className="container-fluid p-4 pb-0">
        <section className="mb-4">
          <FooterIconItem color="primary" link="https://www.linkedin.com/" icon={<Linkedin />} />
          <FooterIconItem color="primary" link="https://www.facebook.com/" icon={<Facebook />} />
          <FooterIconItem color="dark" link="https://github.com/" icon={<Github />} />
        </section>
        <hr />
        <p><CCircle /> Linus Brobäck 2024</p>
      </div>
    </footer>
  )
}

export default Footer