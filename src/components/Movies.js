import React  from "react";
import { movies } from "../data";

function Movies() {
 


  return <div>{/*{code here}*/}
  <h1>Movies Page</h1>
  {movies.map((qw, index) => {
        return (
          <div key={index}>
            <h2>Title: {qw.title}</h2>
            <h2>Time: {qw.time}</h2>

            {qw.genres.map((item, index)=><li key={index}>{item}</li>)}
            
            
          </div>
        );
      })}
  </div>;
}

export default Movies;
