import { useRouteDriver } from "../../../hooks/useRouteDriver"
import { Toaster, toast } from 'sonner'
import { useEffect } from "react"
import { useUser } from "../../../hooks/useUser"
import { RouteMapDriver } from "../../../components/Driver/RouteMapDriver"

export const RutaCon = () => {
  const { user } = useUser()
  const { route, loadingRoute, errorRoute } = useRouteDriver(user.id)

  useEffect(() => {
    if (errorRoute) {
      toast.error('Error al obtener los datos')
    }
  }, [errorRoute])

  return (
    <section className="p-5 h-full pb-44">
      <RouteMapDriver route={route} />
      <Toaster richColors position="bottom-center" />
    </section>
  )
}

