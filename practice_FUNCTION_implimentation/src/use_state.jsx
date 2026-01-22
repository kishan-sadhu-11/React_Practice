import React, { useState } from "react";

export default function Test() {
    const [arr1, setArr1] = useState([10, 20, 30, 40]);
    const [val1, setVal1] = useState("");
    const [val2, setVal2] = useState("");

    const AddArr1 = (v1) => {
        setArr1([...arr1, (v1)]);

    };

    const DelArray = (v1) => {
        setArr1(arr1.filter((x) => x !== (v1)));

    };
    const UpdateArray = (k1, v1) => {
        setArr1(
            arr1.map((x) => (x === k1 ? v1 : x))
        );
    };

    return (
        <>
            <h3>Array: {arr1}</h3>

             <input
                type="number"
                value={val1}
                onChange={(e) => setVal1(e.target.value)}
            /><br/>

            <input
                type="number"
                value={val2}
                onChange={(e) => setVal2(e.target.value)}
            />

            <br /><br />

            <button onClick={() => AddArr1(val1)}>Add</button>
            <button onClick={() => DelArray(val2)}>Delete</button>
            <button onClick={() => UpdateArray(val1, val2)}>
                Update
            </button>
        </>
    );
}
