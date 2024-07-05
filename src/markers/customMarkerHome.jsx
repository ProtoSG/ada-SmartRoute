import { Marker } from "react-leaflet"

export const customMarkerHome = new L.Icon({
  iconUrl: 'src/assets/home.svg',
  iconSize: [40, 40], // tamaño del icono
  iconAnchor: [12, 41], // punto de anclaje del icono
  popupAnchor: [1, -34], // punto de anclaje del popup
  shadowSize: [41, 41] // tamaño de la sombra
})
