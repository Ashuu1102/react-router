import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/ABout.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'




const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children : [  
      {
        path : "",
        element : <Home />
      },
      {
        path : "about",
        element : <About />
      },
      {
        path : "contact",
        element: <Contact />
      },
      {
        path : "user/:userId",
        element : <User />
      },
      {
        path : "github",
        element : <Github />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
