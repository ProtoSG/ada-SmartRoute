import { ButtonAdd } from "../../../components/Admin/ButtonAdd";
import { ButtonOptions } from "../../../components/Admin/ButtonOptions";
import { ButtonPages } from "../../../components/Admin/ButtonPages";
import { Register } from "../../../components/Admin/Register";
import { TitleTable } from "../../../components/Admin/Table";

export const Conductores = () => {
  return (
    <main className="px-10 py-12 text-text w-full">
      <h1 className="text-4xl font-bold">Conductores</h1>
      <ButtonAdd></ButtonAdd>
      <h2 className=" text-xl mb-8">
        <strong>Conductores</strong>
      </h2>
      <TitleTable></TitleTable>
      <Register
        nombre="Brayan"
        apellido="Alquizar"
        username="SketDx"
        estado="Activo"
      ></Register>
      <Register
        nombre="Giovanni"
        apellido="Coronel"
        username="Gio"
        estado="Inactivo"
      ></Register>
      <Register
        nombre="Deyvi"
        apellido="Gomez"
        username="deyvigo"
        estado="En ruta"
      ></Register>
      <Register
        nombre="Deyvi"
        apellido="Gomez"
        username="deyvigo"
        estado="En ruta"
      ></Register>
      <Register
        nombre="Deyvi"
        apellido="Gomez"
        username="deyvigo"
        estado="En ruta"
      ></Register>
      <ButtonPages inicio="1" final="5" total="12"></ButtonPages>
    </main>
  );
};
