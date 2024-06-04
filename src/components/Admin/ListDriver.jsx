import { useState } from "react"
import route1 from "../../assets/route1.png"
import route2 from "../../assets/route2.png"
import route3 from "../../assets/route3.png"

export const ListDriver = ({ route, setRoute }) => {
  const [cond, setCond] = useState("")
  const conductores = [
    {
      id: 1,
      name: 'Juan Perez',
      route: [
        [-12.058618, -77.079876],
        [-12.052618, -77.085876],
      ]
    },
    {
      id: 2,
      name: 'Maria Lopez',
      route: [
        [-12.058618, -77.079876],
        [-12.061018, -77.085276],
      ]
    },
    {
      id: 3,
      name: 'Pedro Ramirez',
      route: [
        [-12.058618, -77.079876],
        [-12.068618, -77.085876],
      ]
    }
  ]

  const handleChangeRoute = (conductor) => {
    setCond(conductor.name)
    setRoute(conductor.route)
  }
  return (
    <div className="flex flex-col gap-6">
      {
        conductores.map((conductor, index) => (
          <span
            onClick={() => handleChangeRoute(conductor)}
            key={index}
            className={`border-2 border-text px-3 py-2 rounded-xl text-xl hover:bg-text hover:text-bg-100 cursor-pointer transition-all hover:font-bold hover:shadow-2xl ${cond === conductor.name ? 'bg-text text-bg-100 font-bold shadow-2xl' : ''}`}
          >
            {conductor.name}
          </span>
        ))
      }
    </div>
  )
}

