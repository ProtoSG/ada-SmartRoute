import { Link, useLocation } from "react-router-dom"

export const ItemLinkCon = ({ name, link, icon }) => {
  const location = useLocation()
  const isSelected = location.pathname === `/${link}`

  return (
    <Link
      to={`/${link}`}
      className={`flex flex-col items-center justify-center gap-2 hover:text-primary transition-all ${isSelected && "text-primary"}`}>
      {icon}
      <span>{name}</span>
    </Link>
  )
}

