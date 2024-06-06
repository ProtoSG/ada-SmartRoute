import React from "react";
import { TitleTable } from "./Table";
import { Register } from "./Register";

export const Drivers = () => {
  return (
    <div>
      <h1>Drivers</h1>
      <TitleTable></TitleTable>
      <Register
        name="Brayan"
        apellido="Alquizar"
        username="SketDx"
        estado="activo"
      ></Register>
    </div>
  );
};
