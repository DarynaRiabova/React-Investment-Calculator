export default function Board({ text, value, onChange }) {
  const handleInputChange = (e) => {
    const newValue = parseFloat(e.target.value);
    onChange(newValue);
  };
  return (
    <div>
      <label>{text} </label>
      <input
        type="number"
        required
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}
