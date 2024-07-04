import { useState } from "react"
import { ItemInput } from "./ItemInput"
import { postDriver } from "../../services/admin.service"

export const DialogAddDriver = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'username') setUsername(value)
    if (name === 'password') setPassword(value)
    if (name === 'firstName') setFirstName(value)
    if (name === 'lastName') setLastName(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // TODO: obtener el username del admin
    const driver = {
      created_by: "admin",
      username: username,
      password: password,
      first_name: firstName,
      last_name: lastName
    }

    const success = await postDriver(driver)
    success ? alert("Conductor Creado") : alert("Error al crear el Conductor")

    resetVariables()
  }

  const resetVariables = () => {
    setUsername("")
    setPassword("")
    setFirstName("")
    setLastName("")
  }

  const handleCloseDialog = () => {
    const dialog = document.getElementById('dialog-add-driver')
    dialog.close()
  }

  return (
    <dialog id="dialog-add-driver" className="relative w-96 p-10 text-text bg-bg-200 m-auto backdrop:bg-black/50 rounded-xl">
      <h3 className="text-2xl text-center mb-6 font-bold">Agregar Conductor</h3>
      <span onClick={handleCloseDialog} className="absolute right-4 top-3 cursor-pointer hover:scale-110 transition-transform">X</span>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6"
      >
        <ItemInput
          label="Nombre de Usuario:"
          placeholder="Agrege el nombre de usuario del conductor..."
          type="text"
          value={username}
          onChange={handleChange}
          name="username"
        />
        <ItemInput
          label="Contraseña:"
          placeholder="Agrege la contraseña  del conductor..."
          type="password"
          value={password}
          onChange={handleChange}
          name="password"
        />
        <ItemInput
          label="Nombre del conductor:"
          placeholder="Agrege el nombre  del conductor..."
          type="text"
          value={firstName}
          onChange={handleChange}
          name="firstName"
        />
        <ItemInput
          label="Apellido del conductor:"
          placeholder="Agrege el apellido  del conductor..."
          type="text"
          value={lastName}
          onChange={handleChange}
          name="lastName"
        />
        <button className=" bg-primary hover:bg-primary/70 rounded-lg py-3 text-xl font-semibold transition-colors">
          Crear Conductor
        </button>
      </form>
    </dialog>
  )
}
