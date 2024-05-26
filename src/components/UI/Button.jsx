export const Button = ({ children, text }) => {
  return (
    <button className="bg-primary text-text text-xl px-3 py-2 rounded-xl flex items-center hover:bg-primary/60 transition-all">
      {children}
      {text}
    </button>
  )
}

