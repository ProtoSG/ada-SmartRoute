import { createContext, useContext, useEffect, useState } from "react"
import { getAllDrivers } from "../../../services/admin.service"

const DriverContext = createContext()

export const DriverProvider = ({ children }) => {
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

  return (
    <DriverContext.Provider value={{ drivers, loadingDrivers, errorDrivers, fetchDrivers }}>
      {children}
    </DriverContext.Provider>
  )
}

export const useDrivers = () => {
  const context = useContext(DriverContext)
  if (context === undefined) {
    throw new Error("useDrivers must be used within a DriverProvider")
  }
  return context
}
