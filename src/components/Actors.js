import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {actors.map((qwy, index) => {
        return (
          <div key={index}>
            <h2>Name: {qwy.name}</h2>
           

            {qwy.movies.map((item, index)=><li key={index}>{item}</li>)}
            
            
          </div>
        );
      })}
    
    {/*{code here}*/}</div>;
}

export default Actors;
