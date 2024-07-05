import { useState } from "react";
import { deleteDriver, updateStatusDriver } from "../../services/admin.service";
import { useDrivers } from "../../pages/admin/hooks/useDrivers";

export const Register = (props) => {
  const [active, setActive] = useState(false)
  const { fetchDrivers } = useDrivers()

  const handleChangeStatus = async () => {
    const success = await updateStatusDriver({
      username: props.username,
      status: props.estado === 'activo' ? "inactivo" : "activo",
    })
    success ? alert("Estado cambiado correctamente") : alert("Error al cambiar el estado")
    fetchDrivers()
  }

  const handleDeleteDriver = async () => {
    const success = await deleteDriver(props.id)
    success ? alert("Conductor Eliminado") : alert("Error al eliminar el conductor")
    fetchDrivers()
  }

  const handleChangeActive = () => {
    setActive(!active)
  }

  return (
    <div className=" flex flex-row flex-auto text-center py-5 border-t-2 border-gray-700">
      <div className="flex-1">{props.nombre}</div>
      <div className="flex-1">{props.apellido}</div>
      <div className="flex-1">{props.username}</div>
      <div
        className={`w-24 ml-20 h-15 border-2 rounded-lg bg-opacity-20 ${props.estado === "activo"
          ? "bg-green-600 border-green-300 hover:bg-green-800 transition duration-300"
          : props.estado === "inactivo"
            ? "bg-red-600 border-red-300 hover:bg-red-500 transition duration-300"
            : props.estado === "En ruta"
              ? "bg-blue-600 border-blue-300 hover:bg-blue-800 transition duration-300"
              : ""
          }`}
      >
        {props.estado}
      </div>

      <div className="w-20 ml-10 relative">
        <button onClick={handleChangeActive} className="w-10">
          <strong>...</strong>
        </button>
        <span className={`absolute bg-bg-200 rounded-lg w-44 p-2 right-8 top-6 ${active ? 'block' : 'hidden'}`}>
          <button
            onClick={handleChangeStatus}
            className="hover:bg-bg-100 rounded-lg w-full px-2 py-2 transition-colors"
          >
            Cambiar estado
          </button>
          <button
            onClick={handleDeleteDriver}
            className="hover:bg-bg-100 rounded-lg w-full px-2 py-2 transition-colors"
          >
            Eliminar
          </button>

        </span>
      </div>
    </div>
  );
};
