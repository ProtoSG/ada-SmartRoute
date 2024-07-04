import { ItemPolyline } from "./ItemPolyline"

export const FullRoutes = ({ routes }) => {
  return (
    <>
      {routes.map((route) => (
        <ItemPolyline key={route.id} route={route} />
      ))}
    </>
  )
}
