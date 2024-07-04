import { Map } from "../../../components/UI/Map";
import { Marker, Popup } from "react-leaflet";
import { useClients } from "../hooks/useClients";
import useRand from "../hooks/useRand";

export const GenerarRuta = () => {
  const { clients, loadingClients, errorClients } = useClients();
  console.log(clients);
  const { fetchRand } = useRand();

  const handleRandRoutes = async () => {
    try {
      await fetchRand();
    } catch (error) {
      console.error("Error al generar ruta:", error);
    }
  };

  return (
    <main className="px-10 py-12 text-text w-full">
      <h2 className="text-4xl font-bold">Generar Ruta</h2>
      <div className="grid grid-cols-4 gap-14 py-10 h-full">
        <Map>
          {/* <Marker position={[-12.0, -77.008]} /> // */}
          {loadingClients ? (
            <p>Cargando datos...</p>
          ) : (
            clients.map((client) => (
              <Marker
                key={client.id_client}
                position={[client.latitud, client.longitud]}
              >
                <Popup>{client.name}</Popup>
              </Marker>
            ))
          )}
        </Map>

        <button
          type="button"
          onClick={handleRandRoutes}
          className="text-text bg-primary p-2 rounded-lg text-xl h-16"
        >
          + Generar Ruta
        </button>
      </div>
    </main>
  );
};
