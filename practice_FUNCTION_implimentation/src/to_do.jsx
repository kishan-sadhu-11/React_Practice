import React, { useState } from "react";

export default function Test() {
    const [arr1, setArr1] = useState([]);

    const [val1, setVal1] = useState("kishan");
    const [val2, setVal2] = useState(19);


    const AddElement = (name, age) => {
        setArr1([...arr1, { name, age}])
    };


    const DelElement = (index) => {
        setArr1(arr1.filter((value, key) => key !== index))
    }



    return (
        <>
            <input type="text" onChange={(e) => setVal1(e.target.value)} value={val1} />
            <input type="text" onChange={(e) => setVal2(e.target.value)} value={val2} /><br />

            <button onClick={() => AddElement(val1, val2)}>Add</button>

            <ul>
                {arr1.map((value, index) => (
                    <li key={index}>
                        Name : {value.name}<br/>
                        Age : {value.age}<br/>
                        <button onClick={() => DelElement(index)}>DELETE</button>
                    </li>
                ))}
            </ul>
        </>
    );
}
