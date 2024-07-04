import { useEffect, useState } from "react"
import { getAllDrivers } from "../../../services/admin.service"

export const useDrivers = () => {
  const [drivers, setDrivers] = useState([])
  const [loadingDrivers, setLoadingDrivers] = useState(false)
  const [errorDrivers, setErrorDrivers] = useState(null)

  const fetchDrivers = async () => {
    try {
      setLoadingDrivers(true)
      setErrorDrivers(null)
      const data = await getAllDrivers()
      setDrivers(data)
    } catch (error) {
      setErrorDrivers(error)
    } finally {
      setLoadingDrivers(false)
    }
  }

  useEffect(() => {
    fetchDrivers()
  }, [])

  return { drivers, loadingDrivers, errorDrivers, fetchDrivers }
}
