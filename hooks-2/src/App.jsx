import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [num1, setNum1] = useState(100);
  const [num2, setNum2] = useState(1000);
 // usefect runs 1 time
   useEffect(() => {
     setNum1(200);
     console.log("from useeffect")

     return () => {
      setNum1(100); 
      console.log("memory cleaned up")      
     }
   }, [num1,num2]);



  // useEffect(() => {
  //   console.log("from useEffect");
  // }, [num1,num2]);

  console.log(num1);

  return (
    <div>
      <h1>{num1}</h1>
      <button onClick={() => setNum1((curr) => curr + 1)}>Add</button>
       <h1>{num2}</h1>
      <button onClick={() => setNum2((curr) => curr + 1)}>Add</button>
    </div>
  );
};

export default App;

//youtube videos loading - homepage
//updates geting reflected everywhere in website
