import { Navigate } from "react-router-dom"
import { useUser } from "../../hooks/useUser"

export const PrivateRouteAdmin = ({ children }) => {
  const { user } = useUser()
  return user.id && user.role === "ROLE_ADMIN" ? children : <Navigate to="/login" replace />
}

export const PrivateRouteDriver = ({ children }) => {
  const { user } = useUser()
  return user.id && user.role === "ROLE_DRIVER" ? children : <Navigate to="/login" replace />
}
