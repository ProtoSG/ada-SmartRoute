import { useEffect, useState } from "react"
import { getRand } from "../../../services/admin.service"

export const useRand = () => {
  const [rand, setRand] = useState(false)
  const [loadingRand, setLoadingRand] = useState(false)
  const [errorRand, setErrorRand] = useState(null)

  useEffect(() => {
    const fetchRand = async () => {
      try {
        setLoadingRand(true)
        setErrorRand(null)
        const data = await getRand()
        setRand(data)
      } catch (error) {
        setErrorRand(error)
      } finally {
        setLoadingRand(false)
      }
    }

    fetchRand()
  }, [])

  return { rand, loadingRand, errorRand }
}
