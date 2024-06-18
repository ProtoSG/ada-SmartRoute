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
  const route = data.data
  return route
}

export {
  getInfoDriver,
  getRouteDriver
}
