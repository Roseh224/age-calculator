export default function UnitSelection({area, options, selected, changeSelected}) {
    function handleUnitChange(event) {
        changeSelected(event.target.value);
    }

    return(
        <div>
            <label>{area}: </label>
            <select
                value={selected}
                onChange={handleUnitChange}
            >
                <option value="" disabled>
                    -- Select a Unit --
                </option>
                {options.map((unit) => (
                    <option key={unit} value={unit}>
                        {unit}
                    </option>
                ))}
            </select>
        </div>
    )
}