import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Knowledge from './components/Knowledge'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

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
