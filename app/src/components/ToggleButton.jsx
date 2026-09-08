function ToggleButton({ id, name, buttonImage, buttonAlt, onToggleSelect, isSelected }) {
    return (
        <option value={name}>
            {name}
            {/* <input type="checkbox" onClick={onToggleSelect(id)} /> */}

        </option>

    );
}

export default ToggleButton;