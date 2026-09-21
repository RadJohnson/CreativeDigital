import '../styles/toggleButton.css'


function ToggleButton({id, name, onToggleSelect, isSelected}) {
    return (
        
        <label className="pill">
            <input
                type="checkbox"
                checked={isSelected}
                onChange={() => onToggleSelect(id)}
                />
            {name}
        </label>
    );
}

export default ToggleButton;