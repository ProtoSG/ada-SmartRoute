import React from "react";

export const TitleTable = () => {
  return (
    <div className=" flex flex-row flex-auto text-center">
      <div className="flex-1">
        <strong>Nombre</strong>
      </div>
      <div className="flex-1">
        <strong>Apellido</strong>
      </div>
      <div className="flex-1">
        <strong>Username</strong>
      </div>
      <div className="w-24 ml-20">
        <strong>Estado</strong>
      </div>
      <div className="w-20 ml-10"></div>
    </div>
  );
};
