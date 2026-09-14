function ToggleButton({id, name, buttonImage, buttonAlt, onToggleSelect, isSelected}) {
    return (
        // <option value={name}>
        //    {name}
        //    <input type="checkbox" onClick={onToggleSelect(id)}/>
        // </option>

        <label className="pill">
            <input
                type="checkbox"
                checked={isSelected}   // controlled: React decides ticked or not,
                // not the browser's own memory
                onChange={() => onToggle(id)}  // fires on click AND keyboard (Space)
                //does not seem true
            />
            {name}
        </label>
    );
}

export default ToggleButton;