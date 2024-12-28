import { Linkedin, Facebook, Github, CCircle } from 'react-bootstrap-icons'
import FooterIconItem from './FooterIconItem'


function Footer() {

  return (
    <footer className="bg-light text-center fixed-bottom border-top">
      <div className="container-fluid p-4 pb-0">
        <section className="mb-4">
          <FooterIconItem color="primary" link="https://www.linkedin.com/in/linus-brob%C3%A4ck-33551876/" icon={<Linkedin />} />
          <FooterIconItem color="primary" link="https://www.facebook.com/linus.broback" icon={<Facebook />} />
          <FooterIconItem color="dark" link="https://github.com/Limpan89" icon={<Github />} />
        </section>
        <hr />
        <p><CCircle /> Linus Brobäck 2024</p>
      </div>
    </footer>
  )
}

export default Footer