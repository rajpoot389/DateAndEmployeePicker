import React from 'react'
import Dropdown from './Components/DropDown/Dropdown'
import BasicDatePicker from './Components/DatePicker/BasicDatePicker'
import './App.css'

const App = () => {
  return (
    <div className='root-container'>
      <Dropdown/>
      <BasicDatePicker />
    </div>
  )
}

export default App