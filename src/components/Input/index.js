export default function Input({ label, value, onChange }) {
  return (
    <div className="inputGroup">
      <div className="cantBeZero">
        <label htmlFor={label}>{label}</label>
        {label === "Number of people" && value < 1 && <h3>Can't be zero</h3>}
      </div>
      <input
        className="bg-input"
        id={label}
        name={label}
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="number"
        min="0"
      />
    </div>
  );
}
