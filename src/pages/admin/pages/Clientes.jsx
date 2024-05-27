import { useClient } from '../../../components/Admin/useClient'
import { FormClient } from './../../../components/Admin/FormClient'
import { Map } from './../../../components/Admin/Map'

export const Clientes = () => {
  const { clients, handleNewClient } = useClient([])
  console.log(clients)
  return (
    <main className="px-10 py-12 text-text w-full">
      <h2 className="text-4xl font-bold">Clientes</h2>
      <div className="grid grid-cols-4 gap-14 py-10 h-full">
        <Map clients={clients} />
        <FormClient handleNewClient={handleNewClient} />
      </div>
    </main>
  )
}