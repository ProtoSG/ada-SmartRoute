import { useCallback, useEffect, useState } from "react"
import { Marker, Polyline, Popup, Tooltip } from "react-leaflet"
import { ListDriver } from "../../../components/Admin/ListDriver"
import { Button } from "../../../components/UI/Button"
import { Map } from "../../../components/UI/Map"
import { PlusIcon } from "../../../icons/PlusIcon"
import { useRoutes } from "../hooks/useRoutes"
import { Toaster, toast } from 'sonner'
import { useClients } from '../hooks/useClients'

const ItemPolyline = ({ route }) => {
  return (
    <Polyline
      key={route.id}
      pathOptions={{ color: `rgb(${Math.floor(Math.random() * 128)}, ${Math.floor(Math.random() * 128)}, ${Math.floor(Math.random() * 128)})` }}
      positions={route.route}
    >
      <Tooltip direction="center" opacity={1} permanent>
        {route.distance.toFixed(2)}
      </Tooltip>
    </Polyline>

  )
}

const DriverRoute = ({ routes, idDriver }) => {
  return (
    <>
      {routes.map((route) => (
        route.id_driver === idDriver && (
          <ItemPolyline key={route.id} route={route} />
        )
      ))}
    </>
  )
}

const FullRoutes = ({ routes }) => {
  return (
    <>
      {routes.map((route) => (
        <ItemPolyline key={route.id} route={route} />
      ))}
    </>
  )
}

export const Rutas = () => {
  const [active, setActive] = useState(false)
  const [idDriver, setIdDriver] = useState(0)

  const { routes, loadingRoutes, errorRoutes } = useRoutes()

  const { clients } = useClients()


  const handleRoutes = useCallback(() => {
    setActive(false);
    setIdDriver(0)
    if (errorRoutes) {
      toast.error('Error al obtener los datos');
    } else if (routes.length === 0) {
      toast.error('No hay rutas disponibles');
    } else {
      toast.success('Rutas cargadas');
    }
  }, [routes, setActive]);

  useEffect(() => {
    handleRoutes()
  }, [routes, handleRoutes])


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
                      <DriverRoute routes={routes} idDriver={idDriver} />
                    ) : (
                      <FullRoutes routes={routes} clients={clients} />
                    )
                  }
                  {clients.map((client) => (
                    <Marker
                      key={client.id_client}
                      position={[client.latitud, client.longitud]}
                    >
                      <Popup>
                        {client.name}
                      </Popup>
                    </Marker>
                  ))}
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
            <ListDriver setActive={setActive} idDriver={idDriver} setIdDriver={setIdDriver} />
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

