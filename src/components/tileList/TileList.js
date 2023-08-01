import React from "react";
import {Tile} from '../tile/Tile'
export const TileList = ({tiles}) => {
  return (
    <div>
      {
        tiles.map(({name, ...rest}, index) => {
          return <Tile name={name} details={rest} key={index} /> 
      })
      }
    </div>
  );
};
