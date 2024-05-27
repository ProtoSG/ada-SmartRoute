import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet'
import { DraggableMarker } from './DraggableMarker'
import { NoDraggableMarker } from './NoDraggableMarker'

export const Map = ({ clients }) => {
  return (
    <div className="col-span-3 rounded-lg w-full bg-bg-200 overflow-hidden">
      <MapContainer center={[-12.058618, -77.079876]} zoom={16} className="w-full h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DraggableMarker />
        { clients.map(({ latitud, longitud, cliente }, index) => (
          <NoDraggableMarker key={index} lat={latitud} lng={longitud} cliente={cliente} />
        )) }
      </MapContainer>
    </div>
  )
}