import { useEffect, useState } from "react"
import { getInfoDriver } from "../../../services/driver.service"

export const useInfoDriver = (id) => {
  const [infoDriver, setInfoDriver] = useState([])
  const [loadingInfoDriver, setLoadingInfoDriver] = useState(false)
  const [errorInfoDriver, setErrorInfoDriver] = useState(null)

  useEffect(() => {
    const fetchInfoDriver = async () => {
      try {
        setLoadingInfoDriver(true)
        setErrorInfoDriver(null)
        const data = await getInfoDriver(id)
        setInfoDriver(data)
      } catch (error) {
        setErrorInfoDriver(error)
      } finally {
        setLoadingInfoDriver(false)
      }
    }

    fetchInfoDriver()
  }, [id])

  return { infoDriver, loadingInfoDriver, errorInfoDriver }
}
