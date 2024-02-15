import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Erere from './assets/composant/Erere'
import About from './assets/composant/About'
import Intouch from './assets/composant/Intouch'
import Skils from './assets/composant/Skils'

const route=createBrowserRouter([
  {
    path:"/",
    element:<App />
  },
  {
    path:"/About",
    element:<About/>
  },
  {
    path:"/Intouch",
    element:<Intouch />
  },
  {
    path:"/Skils",
    element:<Skils />
  },
  {
    path:"*",
    element:<Erere/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
