import { useCallback, useEffect, useState } from "react"
import { useDrivers } from "../../pages/admin/hooks/useDrivers"
import { useRouteDriver } from "../../hooks/useRouteDriver"
import { Toaster, toast } from 'sonner'

export const ListDriver = ({ setActive, setRoute }) => {
  const [selectId, setSelectId] = useState()
  const { drivers, loadingDrivers, errorDrivers } = useDrivers()
  const { route, loadingRoute, errorRoute } = useRouteDriver(selectId)

  const handleChangeRoute = useCallback((id) => {
    setSelectId(id)
    if (errorRoute) {
      setRoute([])
      toast.error('Error al obtener los datos')
    }
    else {
      setRoute(route)
      toast.success('Conductor seleccionado')
    }
    setActive(true)
  }, [errorRoute, route, setRoute, setActive])

  useEffect(() => {
    if (selectId) {
      setRoute(route);
    }
  }, [route, selectId, setRoute]);

  if (loadingDrivers) return <p>Loading...</p>
  if (errorDrivers) return <p>Error al obtener los datos</p>

  return (
    <div className="flex flex-col gap-6">
      {
        drivers.map((driver) => (
          <span
            onClick={() => handleChangeRoute(driver.id_driver)}
            key={driver.id_driver}
            className={`border-2 border-text px-3 py-2 rounded-xl text-xl hover:bg-text hover:text-bg-100 cursor-pointer transition-all hover:font-bold hover:shadow-2xl ${selectId === driver.id_driver ? 'bg-text text-bg-100 font-bold shadow-2xl' : ''}`}
          >
            {driver.first_name} {driver.last_name}
          </span>
        ))
      }
      <Toaster richColors position="bottom-center" />
    </div>
  )
}

