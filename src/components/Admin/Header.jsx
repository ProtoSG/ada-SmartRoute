import { ItemLink } from "./ItemLink"
import { CarIcon, UserIcon, RouteIcon, House, Box } from "../../icons"

export const Header = () => {
  return (
    <header className="text-text border-r-2 border-bg-200 lg:w-80 w-40 px-10 py-12">
      <section className="flex items-center justify-center gap-2">
        <Box className="text-primary size-10" />
        <h1 className="uppercase text-2xl tracking-widest lg:block hidden">
          SmartRoute
        </h1>
      </section>
      <nav>
        <ul className="mt-10 flex flex-col gap-4 lg:items-start  items-center">
          <ItemLink name="Inicio" link="" icon={<House className="size-8" />} />
          <ItemLink name="Conductores" link="conductores" icon={<CarIcon className="size-8" />} />
          <ItemLink name="Rutas" link="rutas" icon={<RouteIcon className="size-8" />} />
          <ItemLink name="Clientes" link="clientes" icon={<UserIcon className="size-8" />} />
        </ul>
      </nav>
    </header>
  )
}

