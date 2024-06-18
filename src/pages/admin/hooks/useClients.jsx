import { useEffect, useState } from "react"
import { getAllClients } from "../../../services/admin.service"

export const useClients = () => {
  const [clients, setClients] = useState([])
  const [loadingClients, setLoadingClients] = useState(false)
  const [errorClients, setErrorClients] = useState(null)

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setLoadingClients(true)
        setErrorClients(null)
        const data = await getAllClients()
        setClients(data)
      } catch (error) {
        setErrorClients(error)
      } finally {
        setLoadingClients(false)
      }
    }

    fetchClients()
  }, [])

  return { clients, loadingClients, errorClients }
}

