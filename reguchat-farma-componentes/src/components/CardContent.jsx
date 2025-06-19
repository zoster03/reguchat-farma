export default function CardContent({ children, className }) {
  return (
    <div className={`rounded p-2 ${className}`}>
      {children}
    </div>
  );
}