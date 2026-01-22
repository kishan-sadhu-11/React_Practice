import React, { useState } from "react";

export default function HandleExample() {
    const [count, setCount] = useState(0);//huck
    //count = state variable
    //setCount = is function of state variable
    //useState(0) is initial value of state variable


  const [name, setName] = useState("gust");
  const [check, setCheck] = useState(true);
  const [check1, setCheck1] = useState(true);

  return (
    <>
      <h2>COUNT : {count}</h2>
      <br />
      <button onClick={() => setCount(count + 1)}>INCREASE</button>
      <button onClick={() => setCount(count - 1)}>DECREASE</button><br/><br/><br/><br/>

      name : {name}<br/>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/><br/><br/><br/><br/>


      <input type="checkbox" value={check} onChange={() => setCheck(!check)} /><br/><br/><br/><br/>

      <input type="checkbox" value={check1} onChange={(e) => setCheck1(e.target.value)} /><br/><br/><br/><br/>
    </>
  );
}

//all huks are function
//huk start from use





{/*
  ...user, name: e.target.value


  1)  ...user  = ye jo name ki value set he usko copy karta he and agar kuch enter kiya to vo nayi
  value vo purani value me override kardega and agar kuch naho karoge to aisa ka aisa hi rehne deta he



  1).spread opretore in object = override the value
  2).spread opretore in array = append the value
  */}