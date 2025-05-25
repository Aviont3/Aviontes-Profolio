import { useState } from 'react'

import './App.css'
// import {routes,route} from 'react-router-dom'
import ProHeader  from './Components/Top'
import { Routes,Route } from 'react-router-dom'
// import Navbar from './Components/navbar'
import Intro from './Pages/Intro'
import Tech from './Pages/stack'
import ContactInfo from './Pages/Connect'
function App() {

  return (
    <>
    
<ProHeader />
{/* <Navbar/> */}
<Routes>
  <Route path='/' element={<Intro/>} />
  <Route path='/stack' element={<Tech/>} />
  {/* <Route path='/projects' element={<Projects/>} /> */}
  <Route path='/contact' element={<ContactInfo/>} />  
</Routes>
      
    </>
  )
}

export default App
