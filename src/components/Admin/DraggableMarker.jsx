import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import { useState } from "react";
import { useStoreClientForm } from "./useStoreClientForm";

export const DraggableMarker = () => {
  const { latitud, setLatitud, longitud, setLongitud } = useStoreClientForm();

  const [position, setPosition] = useState([-12.0017537, -77.0086041]);
  const [draggable, setDraggable] = useState(true);

  const eventHandlers = {
    dragend(e) {
      const marker = e.target;
      const newPos = marker.getLatLng();
      const lat = Number(newPos.lat.toFixed(7));
      const lng = Number(newPos.lng.toFixed(7));
      setPosition([lat, lng]);
      setLatitud(lat);
      setLongitud(lng);
    },
  };

  return (
    <Marker
      position={position}
      draggable={draggable}
      eventHandlers={eventHandlers}
      zIndexOffset={1000}
    >
      <Popup minWidth={90}>
        <span>Drag me to change position</span>
      </Popup>
    </Marker>
  );
};
