import { Link, Route } from "react-router-dom"
import { Box } from "../../icons/Box"
import { ItemLink } from "./ItemLink"
import { House } from "../../icons/House"
import { UserPlus } from "../../icons/UserPlus"
import { RouteIcon } from "../../icons/RouteIcon"

export const Header = () => {
  return (
    <header className="text-text border-r-2 border-bg-200 w-80 px-10 py-12">
      <section className="flex items-center gap-2">
        <Box className="text-primary size-10" />
        <h1 className="uppercase text-2xl tracking-widest">
          SmartRoute
        </h1>
      </section>
      <nav>
        <ul className="mt-10 flex flex-col gap-4">
          <ItemLink name="Inicio" link="" icon={<House className="size-8" />} />
          <ItemLink name="Conductores" link="conductores" icon={<UserPlus className="size-8" />} />
          <ItemLink name="Rutas" link="rutas" icon={<RouteIcon className="size-8" />} />
        </ul>
      </nav>
    </header>
  )
}

