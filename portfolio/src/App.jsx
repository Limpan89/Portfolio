import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Knowledge from './components/Knowledge'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Contact from './components/Contact'
import Reference from './components/Reference'
import Portfolio from './components/Portfolio'

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
        path: '/',
        element: <Home />
      },
      {
        path: '/aboutme',
        element: <AboutMe />
      },
      {
        path: '/kunskap',
        element: <Knowledge />
      },
      {
        path: '/portfolj',
        element: <Portfolio />
      },
      {
        path: '/referens',
        element: <Reference />
      },
      {
        path: '/kontakt',
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
