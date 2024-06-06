import React from "react";

export const ButtonPages = (props) => {
  return (
    <div className="flex flex-row text-end items-end flex-grow w-full">
      <div className="flex-1">
        {props.inicio}-{props.final} of {props.total}
      </div>
      <div>
        <button className=" mx-3">{"|<"}</button>
        <button className=" mx-3">{"<"}</button>
        <button className=" mx-3">{">"}</button>
        <button className=" mx-3">{">|"}</button>
      </div>
    </div>
  );
};
