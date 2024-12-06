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
  const [unitShown, setUnitShown] = useState(UNITS[0]);
  const [isValid, setIsValid] = useState(true);
  const [age, setAge] = useState(786555147.89);

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

    if (convertedDate) {
      setIsValid(true);
      setAge(calculateAge(convertedDate, selectedUnit));
      setUnitShown(selectedUnit);
    }
    else {
      setIsValid(false);
    }
  }

  return (
    <div className='content'>
      <Header />
      <div className='user_input'>
        <ul>
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
        </ul>
      </div>
      <div className='results'>
        {isValid ? (
        <Result age={age} unit={unitShown} /> 
        ) : (
        <h2> The birthday you have input is not valid. Please confirm that the information provided in correct, and try again. </h2>
        )}
      </div>
    </div>
  )
}

export default App
