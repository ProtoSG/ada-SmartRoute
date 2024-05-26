import { Outlet } from "react-router-dom"
import { Header } from "../../components/Admin/Header"

export const Admin = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

