import { Polyline } from "react-leaflet"
import { Map } from "../../../components/UI/Map"
import { useRouteDriver } from "../../../hooks/useRouteDriver"
import { SolicitarRutaCon } from "./SolicitarRutaCon"
import { useParams } from "react-router-dom"

const RouteMapDriver = ({ route }) => {
  const limeOptions = { color: 'red' }

  return (
    <>
      <h3 className="text-3xl font-bold pb-6">Mi Ruta</h3>
      <section className="bg-bg-200 col-span-3 rounded-2xl h-full flex justify-center">
        <Map>
          <Polyline pathOptions={limeOptions} positions={route} />
        </Map>
      </section>
    </>
  )
}

export const RutaCon = () => {
  const { id } = useParams()
  const { route, loadingRoute, errorRoute } = useRouteDriver(id)

  return (

    <section className="p-5 h-full pb-44">
      {
        route.length === 0 ? (
          <SolicitarRutaCon />
        ) : (
          <RouteMapDriver route={route} />
        )
      }
    </section>
  )
}

