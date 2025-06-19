export default function Button({ onClick, children, className, title }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded font-semibold transition ${className}`}
      title={title}
    >
      {children}
    </button>
  );
}