import { useEffect } from "react"
import { useState } from "react"
import { getAllRoutes } from "../../../services/admin.service"

export const useRoutes = () => {
  const [routes, setRoutes] = useState([])
  const [loadingRoutes, setLoadingRoutes] = useState(false)
  const [errorRoutes, setErrorRoutes] = useState(null)

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        setLoadingRoutes(true)
        setErrorRoutes(null)
        const data = await getAllRoutes()
        setRoutes(data)
      } catch (error) {
        setErrorRoutes(error)
      } finally {
        setLoadingRoutes(false)
      }
    }
    fetchRoutes()
  }, [])

  return { routes, loadingRoutes, errorRoutes }
}

