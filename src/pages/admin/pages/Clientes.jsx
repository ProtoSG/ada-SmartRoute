import { useClient } from "../../../components/Admin/useClient";
import { Map } from "../../../components/UI/Map";
import { FormClient } from "./../../../components/Admin/FormClient";
import { DraggableMarker } from "./../../../components/Admin/DraggableMarker";
import { NoDraggableMarker } from "./../../../components/Admin/NoDraggableMarker";
import useCreateClients from "../hooks/useCreateClients";
import useRand from "../hooks/useRand";

export const Clientes = () => {
  const { clients, handleNewClient } = useClient([]);
  console.log(clients);
  const { createClientsHandler, response, loading, error } = useCreateClients();
  const { fetchRand } = useRand();

  const handleSendClients = async () => {
    try {
      await createClientsHandler(clients);
      await fetchRand();
    } catch (error) {
      console.error("Error sending clients:", error);
    }
  };

  return (
    <main className="px-10 py-12 text-text w-full">
      <h2 className="text-4xl font-bold">Clientes</h2>
      <div className="grid grid-cols-4 gap-14 py-10 h-full">
        <Map>
          <DraggableMarker />
          {clients.map(({ latitud, longitud, name }, index) => (
            <NoDraggableMarker
              key={index}
              lat={latitud}
              lng={longitud}
              name={name}
            />
          ))}
        </Map>
        <FormClient
          handleNewClient={handleNewClient}
          handleSendClients={handleSendClients}
        />
      </div>
      {loading && <p>Enviando clientes...</p>}
      {response && (
        <div>
          <p>Último ID de cliente: {response.last_row_id_client}</p>
          <p>Total de clientes: {response.row_count}</p>
          <p>Último ID de cliente exacto: {response.last_row_id_ce}</p>
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </main>
  );
};
