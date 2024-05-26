import { Link, useLocation } from "react-router-dom"

export const ItemLink = ({ name, link, icon }) => {

  const location = useLocation()
  const isSelected = location.pathname === `/${link}`

  return (
    <Link
      to={`/${link}`}
      className={`flex gap-3 text-lg p-3 rounded-xl transition-all ${isSelected ? "bg-bg-200" : ""}`}
    >
      {icon}
      <span>{name}</span>
    </Link>
  )
}

