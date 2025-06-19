export default function Input({ value, onChange, placeholder, className }) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`rounded px-4 py-2 w-full ${className}`}
    />
  );
}