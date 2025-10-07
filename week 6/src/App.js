import React from 'react'
import {Routes, Route} from 'react-router-dom'

import ButtonPage from './pages/ButtonPage'
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'
import NavBar from './components/navbar'

function App() {
  return (
    <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
      {/* {side nav} */}
      <div className='col-span-1'>
        <NavBar />
      </div>

      <div className='col-span-5'>
        <div className='mb-4 text-sm text-gray-600'>
          STUFF THAT'S ALWAYS HERE
          NAVBAR COMING SOON AS A SIDE NAV
        </div>

        {/* <div className = 'col-span-5'> */}
        <Routes>
          <Route path='/' element={<ButtonPage />} />
          <Route path='/accordion' element={<AccordionPage />} />
          <Route path='/dropdown' element={<DropdownPage />} />
        </Routes>
      </div>
    </div>
    // </div>
  )
}

export default App