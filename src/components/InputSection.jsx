import { useState } from 'react'

export default function InputSection({area, prevVal, onValChange}){
    const [value, setValue] = useState(prevVal);

    function handleChange(event) {
        setValue(event.target.value);
        onValChange(area, event.target.value);
    }

    return(
        <li>
            <label>{area}:</label>
            <input className="input_box" type="number" required value={value} onChange={handleChange} />
        </li>
    )
}