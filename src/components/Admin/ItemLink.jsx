import { Link, useLocation } from "react-router-dom"

export const ItemLink = ({ name, link, icon, onClick }) => {

  const location = useLocation()
  const isSelected = location.pathname === `/${link}`

  return (
    <Link
      onClick={onClick}
      to={`/${link}`}
      className={`flex gap-3 text-lg w-full p-3 rounded-xl transition-all ${isSelected ? "bg-bg-200" : ""}`}
    >
      {icon}
      <span className="lg:block hidden">{name}</span>
    </Link>
  )
}

