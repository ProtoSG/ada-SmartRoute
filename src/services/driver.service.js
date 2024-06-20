import { api } from '../constants/api'

const api_driver = `${api}/driver`

const getInfoDriver = async (id) => {
  const response = await fetch(`${api_driver}/info/${id}`)
  if (!response.ok) {
    throw new Error('Error fetching data')
  }
  const data = await response.json()
  const driver = data.data
  return driver
}

const getRouteDriver = async (id) => {
  const response = await fetch(`${api_driver}/route/${id}`)
  if (!response.ok) {
    throw new Error('Error fetching data')
  }
  const data = await response.json()
  console.log("DATA", data)
  const points = data.data.route.points

  const newPoints = points.map((point) => [
    point.latitud,
    point.longitud
  ])

  return newPoints
}

export {
  getInfoDriver,
  getRouteDriver
}
