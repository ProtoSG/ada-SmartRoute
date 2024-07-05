import { Outlet } from "react-router-dom"
import { Header } from "../../components/Admin/Header"
import { DriverProvider } from "./hooks/useDrivers"

export const Admin = () => {
  return (
    <>
      <Header />
      <DriverProvider>
        <Outlet />
      </DriverProvider>
    </>
  )
}

