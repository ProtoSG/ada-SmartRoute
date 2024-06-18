import { api } from '../constants/api'

const api_admin = `${api}/admin`

const getInfoAdmin = async (id) => {
  const response = await fetch(`${api_admin}/info/${id}`)
  if (!response.ok) {
    throw new Error('Error fetching data')
  }
  const data = await response.json()
  const admin = data.data
  return admin
}

const getRand = async () => {
  const response = await fetch(`${api_admin}/rand`)
  if (!response.ok) {
    throw new Error('Error fetching data')
  }
  const data = await response.json()
  if (data.error) return false
  if (data.exito) return true
}

const getAllDrivers = async () => {
  const response = await fetch(`${api_admin}/all/drivers`)
  if (!response.ok) {
    throw new Error('Error fetching data')
  }
  const data = await response.json()
  const drivers = data.data
  return drivers
}

const getAllRoutes = async () => {
  const response = await fetch(`${api_admin}/all/routes`)
  if (!response.ok) {
    throw new Error('Error fetching data')
  }
  const data = await response.json()
  const routes = data.data
  return routes
}

const getAllClients = async () => {
  const response = await fetch(`${api_admin}/all/clients`)
  if (!response.ok) {
    throw new Error('Error fetching data')
  }
  const data = await response.json()
  const clients = data.data
  return clients
}

export {
  getInfoAdmin,
  getRand,
  getAllDrivers,
  getAllRoutes,
  getAllClients
}
