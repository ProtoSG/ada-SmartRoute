import route1 from "../../assets/route1.png"
import route2 from "../../assets/route2.png"
import route3 from "../../assets/route3.png"

export const ListDriver = ({ route, setRoute }) => {
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
  )
}

