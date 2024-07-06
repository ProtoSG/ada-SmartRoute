import React from 'react'
import { useUser } from "../../../hooks/useUser"
import { useInfoDriver } from '../hooks/useInfoDriver'

const ItemPerfil = ({ name, data }) => {
  return (
    <div className='gap-4 grid grid-cols-2 w-96 text-xl mx-auto'>
      <p className='text-end font-semibold'>{name}</p>
      <span className='flex items-center'>{data}</span>
    </div>
  )
}

export const PerfilCon = () => {
  const { user } = useUser()
  const { infoDriver: driver } = useInfoDriver(user.id)

  console.log(driver)

  return (
    <section className=''>
      <h3 className='text-3xl py-8 pl-10'>Mi Perfil</h3>
      <hr className='pb-4' />
      <div className='flex flex-col gap-3 m-auto'>
        {
          driver && Object.entries(driver).map(([key, value]) => {
            const fieldNames = {
              created_by: "Creado por: ",
              first_name: "Nombres: ",
              last_name: "Apellidos: ",
              status: "Estado: ",
              username: "Nombre de usuario: ",
              id_driver: "ID:"
            };

            return (
              <ItemPerfil
                key={key}
                name={fieldNames[key] || key}
                data={value}
              />
            );
          })
        }
      </div>
    </section>
  )
}

