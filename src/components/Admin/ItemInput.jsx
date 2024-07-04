export const ItemInput = ({ label, onChange, value, name, type, placeholder }) => {
  return (
    <label>
      <span className="text-lg px-1">{label}</span>
      <input
        onChange={onChange}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        className=" bg-bg-100 px-3 py-2 rounded-xl w-full mt-2"
        required
      />
    </label>
  )
}


