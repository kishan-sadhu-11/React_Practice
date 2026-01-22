import React, { useState } from "react";

export default function HandleExample() {
    //here user is used as state variable object
    const [user, setUser] = useState({
        name: "kishan",
        age: 19,
        ch: true,
        city: "rajkot"
    })

    return (
        <>
            <input type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} /><br />
            <input type="text" value={user.age} onChange={(e) => setUser({ ...user, age: e.target.value })} /><br />
            <input
                type="checkbox"
                checked={user.ch === "YES"}
                onChange={(e) =>
                    setUser({
                        ...user,
                        ch: e.target.checked ? "YES" : "NO"
                    })
                }
            /><br />
            <input type="text" value={user.city} onChange={(e) => setUser({ ...user, city: e.target.value })} /><br />

            <p>Name : {user.name}</p>
            <p>Age : {user.age}</p>
            <p>CE : {user.ch}</p>
            <p>City : {user.city}</p>
        </>
    );
}
