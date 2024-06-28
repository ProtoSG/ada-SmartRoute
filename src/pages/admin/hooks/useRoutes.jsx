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
        const routes = data.map((route) => ({
          id: route.route.id_route,
          id_driver: route.route.driver.id_driver,
          route: route.route.points.map((point) => [point.latitud, point.longitud]),
          distance: route.route.total_distance
        }))
        setRoutes(routes)
      } catch (error) {
        setErrorRoutes(error.message)
      } finally {
        setLoadingRoutes(false)
      }
    }
    fetchRoutes()
  }, [])

  return { routes, loadingRoutes, errorRoutes }
}

