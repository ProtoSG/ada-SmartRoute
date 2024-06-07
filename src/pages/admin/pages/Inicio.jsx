import React from "react";
import imagenConductor from "../../../assets/conductor.png";
import imagenEntregasRealizadas from "../../../assets/entregasRealizadas.png";
import imagenTiempoPromedio from "../../../assets/tiempoPromedio.png";

export const Inicio = () => {
  return (
    <main className="px-10 py-12 text-text w-full bg-bg-100">
      <h1 className="text-4xl font-bold mb-8">Inicio</h1>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-3">
        {/* Cuadro conductor */}
        <div className="card bg-primary text-black rounded-lg shadow-md flex flex-col justify-between p-4 hover:bg-orange-600 transition duration-300">
          <img
            src={imagenConductor}
            alt="Conductor"
            className="h-29 w-29 object-contain mx-auto"
          />
          <h2 className="text-lg font-bold text-center">Conductores Activos</h2>
          <p className="text-3xl font-bold text-center">1 / 5</p>
        </div>

        {/* Cuadro Entregas Realizadas */}
        <div className="card bg-bg-200 text-white rounded-lg shadow-md flex flex-col justify-between p-4 hover:bg-bg-100 transition duration-300">
          <h2 className="text-lg font-bold">Entregas realizadas</h2>
          <img
            src={imagenEntregasRealizadas}
            alt="Entregas"
            className="h-29 w-29 object-contain mx-auto mt-2"
          />
        </div>

        {/* Cuadro Rutas Optimizadas */}
        <div className="card bg-bg-200 text-white rounded-lg shadow-md p-4 hover:bg-bg-100 transition duration-300">
          <h2 className="text-lg font-bold mb-4">Rutas Optimizadas</h2>
          <div className="flex justify-center items-center h-full">
            <p className="text-3xl font-bold">23</p>
          </div>
        </div>

        {/* Cuadro Tiempo promedio de entrega */}
        <div className="card bg-bg-200 text-white rounded-lg shadow-md p-4 md:col-span-2 hover:bg-bg-100 transition duration-300">
          <h2 className="text-lg font-bold">Tiempo Promedio de Entrega</h2>
          <img
            src={imagenTiempoPromedio}
            alt="Tiempo"
            className="h-29 w-29 object-contain mx-auto mt-2"
          />
        </div>

        {/* Cuadro Entregas por conductor */}
        <div className="card bg-bg-200 text-white rounded-lg shadow-md flex flex-col justify-between p-4 hover:bg-bg-100 transition duration-300">
          <h2 className="text-lg font-bold">Entregas por conductor</h2>
          <img
            src={imagenEntregasRealizadas}
            alt="Entregas"
            className="h-29 w-29 object-contain mx-auto mt-2"
          />
        </div>
      </div>
    </main>
  );
};

export default Inicio;
