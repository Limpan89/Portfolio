import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Knowledge from './components/Knowledge'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Contact from './components/Contact'
import Reference from './components/Reference'
import Portfolio from './components/Portfolio'
import { navLinks } from './constants'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <div>Error!!!</div>,
    children: [
      {
        path: navLinks.home,
        element: <Home />
      },
      {
        path: navLinks['about-me'],
        element: <AboutMe />
      },
      {
        path: navLinks.knowledge,
        element: <Knowledge />
      },
      {
        path: navLinks.portfolio,
        element: <Portfolio />
      },
      {
        path: navLinks.reference,
        element: <Reference />
      },
      {
        path: navLinks.contact,
        element: <Contact />
      }
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App
