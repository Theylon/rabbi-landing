export function Card({ children }) {
  return <div className="rounded-xl shadow bg-white">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}
