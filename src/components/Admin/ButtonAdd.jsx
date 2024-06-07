import React from "react";

export const ButtonAdd = () => {
  return (
    <div className=" flex flex-row-reverse">
      <button className="bg-orange-600 h-9 w-52 h-14 rounded-xl text-white m-10 text-2xl hover:bg-orange-500 transition duration-300">
        <p>+ Agregar</p>
      </button>
    </div>
  );
};
