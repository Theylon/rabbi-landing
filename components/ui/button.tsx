export function Button({ children, ...props }) {
  return <button {...props} className="rounded-xl px-4 py-2 font-semibold">{children}</button>;
}
