import React from "react";

export const Register = (props) => {
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

      <div className="w-20 ml-10 ">
        <button className="w-10">
          <strong>...</strong>
        </button>
      </div>
    </div>
  );
};
