import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import InputSection from './components/InputSection';
import UnitSelection from './components/UnitSelections';
import {UNITS} from './constants';

function App() {
  const [birthday, setBirthday] = useState({Day: 1, Month: 1, Year: 2000});
  const [selectedUnit, setSelectedUnit] = useState(UNITS[0]);

  function handleBirthdayChange(area, newDate) {
    setBirthday((prevBirthday) => {
      return {
        ...prevBirthday,
        [area]: newDate,
      };
    });
  }

  function handleUnitChange(newUnit) {
    setSelectedUnit(newUnit);
  }

  return (
    <>
    <div>
      <Header />
      <InputSection 
        area='Day'
        prevVal={birthday['Day']}
        onValChange={handleBirthdayChange}
      />
      <InputSection 
        area='Month'
        prevVal={birthday['Month']}
        onValChange={handleBirthdayChange}
      />
      <InputSection 
        area='Year'
        prevVal={birthday['Year']}
        onValChange={handleBirthdayChange}
      />
      <UnitSelection
        area='Unit'
        options={UNITS}
        selected={selectedUnit}
        changeSelected={handleUnitChange}
        />
      <h2> unit selection </h2>
      <h2> button </h2>
    </div>
    <div>
      <h1> result </h1>
      <h2> image </h2>
    </div>
    </>
  )
}

export default App
