import { RouteIcon } from "../../icons/RouteIcon"
import { ItemLinkCon } from "./ItemLinkCon"
import { LogoutIcon } from "../../icons/LogoutIcon"
import { UserIcon } from "../../icons/UserIcon"
import { useUser } from "../../hooks/useUser"

export const NavBar = () => {
  const { logout } = useUser()
  return (
    <nav className="border-t-2 border-bg-200 fixed bottom-0 w-full py-4">
      <ul className="flex justify-around">
        <ItemLinkCon onClick={logout} name="Salir" link="login" icon={<LogoutIcon className="size-8" />} />
        <ItemLinkCon name="Ruta" link="conductor" icon={<RouteIcon className="size-8" />} />
        <ItemLinkCon name="Perfil" link="conductor/perfil" icon={<UserIcon className="size-8" />} />
      </ul>
    </nav>
  )
}

