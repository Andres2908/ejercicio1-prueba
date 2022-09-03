import React from "react";

export function Lista({array}) {
    const handleColor = (item) => {
        const background = item % 5 
        const color = {
            0: "white",
            1: "red",
            2: "green",
            3: "blue",
            4: "black"
        }
        return color[background]
    }
    return(
        <div>{array.map((item) => (
            <div style={{background: handleColor(item)}}>{item}</div>
            ))}</div>
    )
}