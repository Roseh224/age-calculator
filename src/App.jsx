import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import InputSection from './components/InputSection';
import UnitSelection from './components/UnitSelections';
import Result from './components/Result';
import {UNITS} from './constants';
import { isValidDate, calculateAge } from './calcs';

function App() {
  const [birthday, setBirthday] = useState({Day: 1, Month: 1, Year: 2000});
  const [selectedUnit, setSelectedUnit] = useState(UNITS[0]);
  const [age, setAge] = useState();

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

  function handleNewCalc(){
    const convertedDate = isValidDate(birthday['Day'], birthday['Month'], birthday['Year']);
    setAge(calculateAge(convertedDate, selectedUnit));

    console.log(age);

    // console.log(isValidDate(birthday['Day'], birthday['Month'], birthday['Year']));
    // console.log(birthday);
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
        <button onClick={handleNewCalc}>Calculate Age!</button>
    </div>
    <div>
      <Result age={age} /> 
    </div>
    </>
  )
}

export default App
