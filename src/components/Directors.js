import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {directors.map((qw, index) => {
        return (
          <div key={index}>
            <h2>Name: {qw.name}</h2>
           

            {qw.movies.map((item, index)=><li key={index}>{item}</li>)}
            
            
          </div>
        );
      })}
    </div>;
}

export default Directors;
