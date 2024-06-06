import React from "react";

export const ButtonOptions = () => {
  return (
    <div className="flex flex-col w-52 h-36 rounded-lg bg-zinc-800 items-center justify-center">
      <button className=" text-right text-lg w-36">x</button>
      <button className=" text-black border bg-gray-300 rounded-lg m-1 flex justify-around w-36">
        <div>Editar</div>
        <div>(ICON)</div>
      </button>
      <button className="rounded-lg border-gray-300 border m-1 flex justify-around w-36">
        <div>Eliminar</div>
        <div>(ICON)</div>
      </button>
    </div>
  );
};
