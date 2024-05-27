import { useReducer } from "react"
import { clientReducer } from "./clientReducer"

export const useClient = (initialState = []) => {
  const [ clients, dispatch ] = useReducer(clientReducer, [])

  const handleNewClient = (client) => {
    const action = {
      type: '[CLIENT] add',
      payload: client
    }
    dispatch(action)
  }

  return {
    clients,
    handleNewClient
  }
}