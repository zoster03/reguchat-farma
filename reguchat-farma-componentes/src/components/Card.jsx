export default function Card({ children, className }) {
  return (
    <div className={`rounded-xl p-2 ${className}`}>
      {children}
    </div>
  );
}