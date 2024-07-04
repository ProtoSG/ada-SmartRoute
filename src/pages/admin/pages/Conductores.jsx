import { ButtonAdd } from "../../../components/Admin/ButtonAdd";
import { ButtonOptions } from "../../../components/Admin/ButtonOptions";
import { ButtonPages } from "../../../components/Admin/ButtonPages";
import { Register } from "../../../components/Admin/Register";
import { TitleTable } from "../../../components/Admin/Table";
import { useDrivers } from "../hooks/useDrivers";

export const Conductores = () => {
  const { drivers, loadingDrivers, errorDrivers, fetchDrivers } = useDrivers()

  return (
    <main className="px-10 py-12 text-text w-full">
      <h1 className="text-4xl font-bold">Conductores</h1>
      <ButtonAdd fetchDrivers={fetchDrivers} />
      <h2 className=" text-xl mb-8">
        <strong>Conductores</strong>
      </h2>
      <TitleTable></TitleTable>
      <span>
        {
          loadingDrivers ? <span>Cargando Conductores</span>
            : errorDrivers ? <span>Error al cargar los Conductores</span>
              : drivers && drivers.map((driver) => (
                <Register
                  key={driver.id_driver}
                  id={driver.id_driver}
                  nombre={driver.first_name}
                  apellido={driver.last_name}
                  username={driver.username}
                  estado={driver.status}
                  fetch={fetchDrivers}
                />
              ))
        }
      </span>
      <ButtonPages inicio="1" final="5" total="12"></ButtonPages>
    </main>
  );
};
