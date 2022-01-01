import "./styles.css";

export default function Input({ label, value, onChange }) {
  return (
    <div className="inputGroup">
      <label htmlFor={label}>{label}</label>
      <input
        className="bg-input"
        id={label}
        name={label}
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="number"
      />
    </div>
  );
}
