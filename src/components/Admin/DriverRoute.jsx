import { ItemPolyline } from "./ItemPolyline"

export const DriverRoute = ({ routes, idDriver }) => {
  return (
    <>
      {routes.map((route) => (
        route.id_driver === idDriver && (
          <ItemPolyline key={route.id} route={route} />
        )
      ))}
    </>
  )
}

