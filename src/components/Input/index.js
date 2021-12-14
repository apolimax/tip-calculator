import "./styles.css";

export default function Input({ label, value, onChange }) {
  return (
    <div className="inputGroup">
      <h2>{label}</h2>
      <input
        className="bg-input"
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="number"
      />
    </div>
  );
}
