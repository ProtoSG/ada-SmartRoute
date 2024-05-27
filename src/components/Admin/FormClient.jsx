import { useStoreClientForm } from './useStoreClientForm'

const options = [
  {
    value: 'jp',
    label: 'Juan Perez'
  },
  {
    value: 'ml',
    label: 'Maria Lopez'
  },
  {
    value: 'pr',
    label: 'Pedro Ramirez'
  }
]

export const FormClient = ({ handleNewClient }) => {
  const {
    latitud,
    setLatitud,
    longitud,
    setLongitud,
    conductor,
    setConductor,
    cliente,
    setClientName
  } = useStoreClientForm()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newClient = {
      latitud,
      longitud,
      cliente,
      conductor
    }
    handleNewClient(newClient)
    setLatitud(-12.058618)
    setLongitud(-77.079876)
    setClientName('')
  }

  const handleLatitud = ({ target }) => {
    setLatitud(target.value)
  }

  const handleLongitud = ({ target }) => {
    setLongitud(target.value)
  }

  const handleConductor = ({ target }) => {
    setConductor(target.value)
  }

  const handleClienteName = ({ target }) => {
    setClientName(target.value)
  }

  return (
    <form
      onSubmit={ handleSubmit }
      className="col-span-1 flex flex-col bg-bg-200 rounded-[24px] p-8 gap-4"
    >
      <div className="w-full flex gap-2 flex-col">
        <p className="text-text text-lg font-semibold">Latitud</p>
        <input
          type="text"
          onChange={ handleLatitud }
          name="latitud"
          value={ latitud }
          className="w-full bg-bg-200 border-text border-[1px] rounded-lg p-2 outline-none indent-2"
        />
      </div>
      <div className="w-full flex gap-2 flex-col">
        <p className="text-text text-lg font-semibold">Longitud</p>
        <input
          type="text"
          onChange={ handleLongitud }
          name="longitud"
          value={ longitud }
          className="w-full bg-bg-200 border-text border-[1px] rounded-lg p-2 outline-none indent-2"
        />
      </div>
      <div className="w-full flex gap-2 flex-col">
        <p className="text-text text-lg font-semibold">Conductor</p>
        <select
          type="select"
          onChange={ handleConductor }
          name="conductor"
          className="w-full bg-bg-200 flex justify-between border-text border-[1px] rounded-lg p-2 outline-none"
        >
          { options.map(({label, value}) => (
            <option key={value} value={value}>{label}</option>
          )) }
        </select>
      </div>
      <div className="w-full flex gap-2 flex-col">
        <p className="text-text text-lg font-semibold">Nombre</p>
        <input
          type="select"
          onChange={ handleClienteName }
          name="cliente"
          value={ cliente }
          className="w-full bg-bg-200 border-text border-[1px] rounded-lg p-2 outline-none indent-2"
        />
      </div>
      <button
        className="text-text bg-primary p-2 rounded-lg text-xl"
      >
        Generar Cliente
      </button>
    </form>
  )
}