import { ItemLink } from "./ItemLink";
import { CarIcon, UserIcon, RouteIcon, House, Box, LogoutIcon } from "../../icons";
import { useUser } from "../../hooks/useUser";

export const Header = () => {

  const { logout } = useUser()

  return (
    <header className="text-text border-r-2 border-bg-200 lg:w-80 w-40 px-10 py-12 flex flex-col justify-between">
      <div>
        <section className="flex items-center justify-center gap-2">
          <Box className="text-primary size-10" />
          <h1 className="uppercase text-2xl tracking-widest lg:block hidden">
            SmartRoute
          </h1>
        </section>
        <nav>
          <ul className="mt-10 flex flex-col gap-4 lg:items-start  items-center">
            <ItemLink
              name="Conductores"
              link="conductores"
              icon={<CarIcon className="size-8" />}
            />
            <ItemLink
              name="Rutas"
              link="rutas"
              icon={<RouteIcon className="size-8" />}
            />
            <ItemLink
              name="Clientes"
              link="clientes"
              icon={<UserIcon className="size-8" />}
            />
            <ItemLink
              name="Generar Ruta"
              link="generar-ruta"
              icon={<RouteIcon className="size-8" />}
            />
          </ul>
        </nav>
      </div>
      <ItemLink
        onClick={logout}
        name="Salir"
        link="login"
        icon={<LogoutIcon tclassName="size-8" />}
      />
    </header>
  );
};
