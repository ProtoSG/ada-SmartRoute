import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet'

export const Map = ({ children }) => {
  return (
    <div className="col-span-3 rounded-lg w-full bg-bg-200 overflow-hidden">
      <MapContainer center={[-12.0020474, -77.0087964]} zoom={16} className="w-full h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {children}
      </MapContainer>
    </div>
  )
}
