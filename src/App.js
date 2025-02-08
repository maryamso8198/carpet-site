import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './assets/pages/Home/Home'
import About from './assets/pages/About/About'
import AddStore from './assets/pages/AddStore/AddStore'
import Contact from './assets/pages/Contact Us/Contact Us '
import EditStore from './assets/pages/EditStore/EditStore'
import Guide from './assets/pages/Shopping Guide/Shopping Guide'
import Store from './assets/pages/Store/Store'
const App = ()=> {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/add-store' element={<AddStore/>} />
      <Route path='/edit-store/:storeId' element={<EditStore/>} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/guide' element={<Guide/>} />
      <Route path='/store/:storeId' element={<Store/>} />
    </Routes>
    </BrowserRouter>
  
  )
}
export default App