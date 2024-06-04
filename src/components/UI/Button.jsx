export const Button = ({ children, text, onClick }) => {

  return (
    <button
      onClick={onClick}
      className="bg-primary text-text text-xl justify-center gap-4 px-3 py-2 rounded-xl flex items-center hover:bg-primary/60 transition-all">
      {children}
      {text}
    </button>
  )
}

