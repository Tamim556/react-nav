import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Tamim from './Tamim.jsx'
import Homepage from './Homepage.jsx'
import Navigation from './component/Navagation.jsx'
import Footer from './component/Footer.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Tamim/> */}
    {/* <Homepage/> */}
    <Navigation/>
    <Navigation/>

    <Navigation/>

    <Navigation/>


    <Footer></Footer>

  </React.StrictMode>,
)
