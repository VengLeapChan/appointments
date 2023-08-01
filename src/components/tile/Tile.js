import React from "react";

export const Tile = ({name, details}) => {

  const vals = Object.values(details);
  return (
    <div className="tile-container">
      <p class='tile-title' >{name}</p>
      {vals.map((val, index) => {
        return <p class='tile' key={index}>{val}</p>
      })}
    </div>
  );
};
