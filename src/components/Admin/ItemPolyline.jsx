import { Polyline, Tooltip } from "react-leaflet"

export const ItemPolyline = ({ route }) => {
  return (
    <Polyline
      key={route.id}
      pathOptions={{ 
        color: `rgb(${Math.floor(Math.random() * 128)}, ${Math.floor(Math.random() * 128)}, ${Math.floor(Math.random() * 128)})`,
        weight: 5
      }}
      positions={route.route}
    >
      <Tooltip direction="center" opacity={1} permanent>
        {route.distance.toFixed(2)}
      </Tooltip>
    </Polyline>
  )
}
