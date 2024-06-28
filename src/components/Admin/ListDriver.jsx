import { useCallback, useEffect, useState } from "react"
import { useDrivers } from "../../pages/admin/hooks/useDrivers"
import { Toaster, toast } from 'sonner'

export const ListDriver = ({ setActive, idDriver, setIdDriver }) => {
  const { drivers, loadingDrivers, errorDrivers } = useDrivers()

  const handleChangeRoute = useCallback((id) => {
    setIdDriver(id)
    toast.success('Conductor seleccionado')
    setActive(true)
  }, [setIdDriver, setActive])

  useEffect(() => {
    if (idDriver) {
      setIdDriver(idDriver);
    }
  }, [idDriver, setIdDriver]);

  if (loadingDrivers) return <p>Loading...</p>
  if (errorDrivers) return <p>Error al obtener los datos</p>

  const activeDrivers = drivers.filter((d) => d.status === "activo")

  return (
    <div className="flex flex-col gap-6">
      {
        activeDrivers.map((driver) => (
          <span
            onClick={() => handleChangeRoute(driver.id_driver)}
            key={driver.id_driver}
            className={`border-2 border-text px-3 py-2 rounded-xl text-xl hover:bg-text hover:text-bg-100 cursor-pointer transition-all hover:font-bold hover:shadow-2xl ${idDriver === driver.id_driver ? 'bg-text text-bg-100 font-bold shadow-2xl' : ''}`}
          >
            {driver.first_name} {driver.last_name}
          </span>
        ))
      }
      <Toaster richColors position="bottom-center" />
    </div>
  )
}

