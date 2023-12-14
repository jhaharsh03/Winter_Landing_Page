import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './About.jsx' 
import Home from './Home.jsx'
import Features from './Features.jsx'
import Contact from './Contact.jsx'
import Form from './Form.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path='' element={<Home />}/>/
      <Route path='about' element={<About />}/>
      <Route path='feature' element={<Features/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='form' element={<Form/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)


// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
