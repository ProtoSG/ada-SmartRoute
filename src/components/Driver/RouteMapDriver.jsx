import { Polyline } from "react-leaflet"
import { Map } from "../UI/Map"

export const RouteMapDriver = ({ route }) => {
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
