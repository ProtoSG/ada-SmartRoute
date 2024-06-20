import { useCallback, useEffect, useState } from "react"
import { Polyline } from "react-leaflet"
import { ListDriver } from "../../../components/Admin/ListDriver"
import { Button } from "../../../components/UI/Button"
import { Map } from "../../../components/UI/Map"
import { PlusIcon } from "../../../icons/PlusIcon"
import { useRoutes } from "../hooks/useRoutes"
import { Toaster, toast } from 'sonner'

export const Rutas = () => {
  const [active, setActive] = useState(false)
  const [route, setRoute] = useState([])
  const limeOptions = { color: 'red' }

  const { routes, loadingRoutes, errorRoutes } = useRoutes()

  console.log("ROUTES", routes)

  const handleRoutes = useCallback(() => {
    setActive(false);
    if (errorRoutes) {
      toast.error('Error al obtener los datos');
    } else if (routes.length === 0) {
      toast.error('No hay rutas disponibles');
    } else {
      toast.success('Rutas cargadas');
    }
  }, [errorRoutes, routes, setActive]);

  useEffect(() => {
    handleRoutes()
  }, [routes, handleRoutes])

  console.log("render", route)

  return (
    <main className="px-10 py-12 text-text w-full">
      <h2 className="text-4xl font-bold">Rutas</h2>
      <div className="grid grid-cols-4  gap-14 h-full py-10 ">
        <section className="bg-bg-200 col-span-3 rounded-2xl h-full flex justify-center">
          {
            loadingRoutes
              ? (
                <p>Cargando datos...</p>
              ) : (

                <Map>
                  {
                    active ? (
                      <Polyline pathOptions={limeOptions} positions={route} />
                    ) : (
                      <Polyline pathOptions={limeOptions} positions={routes} />
                    )
                  }
                  {/* <Polyline pathOptions={limeOptions} positions={route} /> */}
                </Map>
              )
          }
        </section>
        <section className="col-span-1 flex flex-col justify-between">
          <div>
            <Button text="Generar Ruta">
              <PlusIcon className="size-8" />
            </Button>
            <h4 className="py-6 text-3xl">Conductores</h4>
            <ListDriver setActive={setActive} setRoute={setRoute} />
          </div>
          <Button
            text="Ver Rutas" className="mt-10"
            onClick={handleRoutes}
          />
        </section>
      </div>
      <Toaster richColors position="bottom-center" />
    </main>
  )
}

