import ruta1 from "../../../assets/route2.png"
export const RutaCon = () => {
  return (
    <section className="p-8 h-full pb-44">
      <h3 className="text-3xl font-bold pb-6">Mi Ruta</h3>
      <span className="rounded-2xl bg-red-200">
        <img src={ruta1} alt="mapa" className="rounded-2xl border-2 border-bg-200 h-full object-cover" />
      </span>
    </section>
  )
}

