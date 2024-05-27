import { Marker } from 'react-leaflet'
import { Popup } from 'react-leaflet'

export const NoDraggableMarker = ({ lat, lng, cliente }) => {
  return (
    <Marker
      position={[ lat, lng ]}
    >
      <Popup minWidth={90}>
        <span>{ cliente }</span>
      </Popup>
    </Marker>
  )
}