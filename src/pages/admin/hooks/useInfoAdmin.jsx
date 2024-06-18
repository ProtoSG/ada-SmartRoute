import { useEffect, useState } from "react"
import { getInfoAdmin } from "../../../services/admin.service"

export const useInfoAdmin = (id) => {
  const [infoAdmin, setInfoAdmin] = useState([])
  const [loadingInfoAdmin, setLoadingInfoAdmin] = useState(false)
  const [errorInfoAdmin, setErrorInfoAdmin] = useState(null)

  useEffect(() => {
    const fetchInfoAdmin = async () => {
      try {
        setLoadingInfoAdmin(true)
        setErrorInfoAdmin(null)
        const data = await getInfoAdmin(id)
        setInfoAdmin(data)
      } catch (error) {
        setErrorInfoAdmin(error)
      } finally {
        setLoadingInfoAdmin(false)
      }
    }

    fetchInfoAdmin()
  }, [id])

  return { infoAdmin, loadingInfoAdmin, errorInfoAdmin }
}
