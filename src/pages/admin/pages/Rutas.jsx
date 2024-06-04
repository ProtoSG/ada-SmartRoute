import { Button } from "../../../components/UI/Button"
import { PlusIcon } from "../../../icons/PlusIcon"
import route3 from "../../../assets/route3.png"
import { useEffect, useState } from "react"
import { ListDriver } from "../../../components/Admin/ListDriver"
import { Map } from "../../../components/UI/Map"
import { Polyline } from "react-leaflet"

export const Rutas = () => {
  const [active, setActive] = useState(false)
  const [route, setRoute] = useState([])
  const limeOptions = { color: 'red' }

  useEffect(() => {
    if (route.length > 0) {
      setActive(true)
    }
  }, [route])


  const multiPolyline = [
    [
      [-12.058618, -77.079876],
      [-12.052618, -77.085876],
    ],
    [
      [-12.058618, -77.079876],
      [-12.061018, -77.085276],
    ],
    [
      [-12.058618, -77.079876],
      [-12.068618, -77.085876],
    ]
  ]

  return (
    <main className="px-10 py-12 text-text w-full">
      <h2 className="text-4xl font-bold">Rutas</h2>
      <div className="grid grid-cols-4  gap-14 h-full py-10 ">
        <section className="bg-bg-200 col-span-3 rounded-2xl h-full flex justify-center">
          <Map>
            {
              active ? (
                <Polyline pathOptions={limeOptions} positions={route} />
              ) : (
                <Polyline pathOptions={limeOptions} positions={multiPolyline} />
              )
            }
            <Polyline pathOptions={limeOptions} positions={route} />
          </Map>
        </section>
        <section className="col-span-1 flex flex-col justify-between">
          <div>
            <Button text="Generar Ruta">
              <PlusIcon className="size-8" />
            </Button>
            <h4 className="py-6 text-3xl">Conductores</h4>
            <ListDriver route={route} setRoute={setRoute} />
          </div>
          <Button
            text="Ver Rutas" className="mt-10"
            onClick={() => setActive(false)}
          />
        </section>
      </div>
    </main>
  )
}

