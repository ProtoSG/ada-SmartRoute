import { useClient } from '../../../components/Admin/useClient'
import { Map } from '../../../components/UI/Map'
import { FormClient } from './../../../components/Admin/FormClient'
import { DraggableMarker } from './../../../components/Admin/DraggableMarker'
import { NoDraggableMarker } from './../../../components/Admin/NoDraggableMarker'

export const Clientes = () => {
  const { clients, handleNewClient } = useClient([])
  console.log(clients)
  return (
    <main className="px-10 py-12 text-text w-full">
      <h2 className="text-4xl font-bold">Clientes</h2>
      <div className="grid grid-cols-4 gap-14 py-10 h-full">
        <Map>
          <DraggableMarker />
          {clients.map(({ latitud, longitud, cliente }, index) => (
            <NoDraggableMarker key={index} lat={latitud} lng={longitud} cliente={cliente} />
          ))}
        </Map>
        <FormClient handleNewClient={handleNewClient} />
      </div>
    </main>
  )
}
