import { useState } from 'react'

export default function InputSection({area, prevVal, onValChange}){
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(prevVal);

    function handleEditing() {
        setIsEditing((editing) => !editing);
        if (isEditing){
            onValChange(area, value);
        }
    }

    function handleChange(event) {
        setValue(event.target.value);
    }

    return(
        <li>
        <span>
            <p>{area}:</p>
            <input type="number" required value={value} onChange={handleChange} />
        </span>
        </li>
    )
}