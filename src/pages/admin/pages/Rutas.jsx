import { Button } from "../../../components/UI/Button"
import { PlusIcon } from "../../../icons/PlusIcon"
import route3 from "../../../assets/route3.png"
import { useState } from "react"
import { ListDriver } from "../../../components/Admin/ListDriver"

export const Rutas = () => {
  const [route, setRoute] = useState(route3)

  return (
    <main className="px-10 py-12 text-text w-full">
      <h2 className="text-4xl font-bold">Rutas</h2>
      <div className="grid grid-cols-4  gap-14 h-full py-10 ">
        <section className="bg-bg-200 col-span-3 rounded-2xl h-full flex justify-center">
          <img src={route} alt="mapa" className="rounded-2xl h-full object-cover " />
        </section>
        <section className="col-span-1 flex flex-col">
          <Button text="Generar Ruta">
            <PlusIcon className="size-8" />
          </Button>
          <h4 className="py-6 text-3xl">Conductores</h4>
          <ListDriver route={route} setRoute={setRoute} />
        </section>
      </div>
    </main>
  )
}

