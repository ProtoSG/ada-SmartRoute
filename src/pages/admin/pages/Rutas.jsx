import { Button } from "../../../components/UI/Button"
import { PlusIcon } from "../../../icons/PlusIcon"
import route1 from "../../../assets/route1.png"
import route2 from "../../../assets/route2.png"
import route3 from "../../../assets/route3.png"
import { useState } from "react"

export const Rutas = () => {
  const [route, setRoute] = useState(route3)

  const conductores = [
    {
      id: 1,
      name: 'Juan Perez',
      route: route1
    },
    {
      id: 2,
      name: 'Maria Lopez',
      route: route2
    },
    {
      id: 3,
      name: 'Pedro Ramirez',
      route: route3
    }
  ]

  const handleChangeRoute = (route) => {
    setRoute(route)
  }

  return (
    <main className="px-10 py-12 text-text w-full">
      <h2 className="text-4xl font-bold">Rutas</h2>
      <div className="grid grid-cols-3  gap-12 h-full py-10 ">
        <section className="bg-bg-200 col-span-2 rounded-2xl">
          <img src={route} alt="mapa" className="size-full object-cover" />
        </section>
        <section className="col-span-1">
          <Button text="Generar Ruta">
            <PlusIcon className="size-8" />
          </Button>
          <h4 className="py-6 text-3xl">Conductores</h4>
          <div className="flex flex-col gap-6">
            {
              conductores.map((conductor, index) => (
                <span
                  onClick={() => handleChangeRoute(conductor.route)}
                  key={index}
                  className={`border-2 border-text px-3 py-2 rounded-xl text-xl hover:bg-text hover:text-bg-100 cursor-pointer transition-all hover:font-bold hover:shadow-2xl ${route === conductor.route ? 'bg-text text-bg-100 font-bold shadow-2xl' : ''}`}
                >
                  {conductor.name}
                </span>
              ))
            }
          </div>
        </section>
      </div>
    </main>
  )
}

