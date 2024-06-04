import { Polyline } from "react-leaflet"
import { Map } from "../../../components/UI/Map"

export const RutaCon = () => {

  const route = [
    [-12.058618, -77.079876],
    [-12.052618, -77.085876],
  ]

  const limeOptions = { color: 'red' }
  return (
    <section className="p-8 h-full pb-44">
      <h3 className="text-3xl font-bold pb-6">Mi Ruta</h3>
      <section className="bg-bg-200 col-span-3 rounded-2xl h-full flex justify-center">
        <Map>
          <Polyline pathOptions={limeOptions} positions={route} />
        </Map>
      </section>
    </section>
  )
}

