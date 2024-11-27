import { useState } from 'react'

export default function InputSection({area, prevVal, onValChange}){
    const [value, setValue] = useState(prevVal);

    function handleChange(event) {
        setValue(event.target.value);
        onValChange(area, event.target.value);
    }

    return(
        <li>
        <span>
            <label>{area}:</label>
            <input type="number" required value={value} onChange={handleChange} />
        </span>
        </li>
    )
}