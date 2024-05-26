import { Outlet } from "react-router-dom"
import { NavBar } from "../../components/Driver/NavBar"

export const Driver = () => {
  return (
    <section className="w-full text-text">
      <Outlet />
      <NavBar />
    </section>
  )
}

