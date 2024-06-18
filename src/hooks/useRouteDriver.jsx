import { useEffect } from "react"
import { useState } from "react"
import { getRouteDriver } from "../services/driver.service"

export const useRouteDriver = (id) => {
  const [route, setRoute] = useState([])
  const [loadingRoute, setLoadingRoute] = useState(true)
  const [errorRoute, setErrorRoute] = useState(null)

  useEffect(() => {
    const fetchRoute = async () => {
      try {
        setLoadingRoute(false)
        const data = await getRouteDriver(id)
        setRoute(data)
      } catch (error) {
        setErrorRoute(error.message)
      } finally {
        setLoadingRoute(false)
      }
    }

    fetchRoute()
  }, [id])

  return { route, loadingRoute, errorRoute }
}
