import React, { useState } from 'react'







import {useDispatch} from "react-redux";
import {changeColor}from "../features/theme";
function ChangeColor() {
    
    const [color,setColor ] = useState("");
    const dispatch = useDispatch();
    return (
        <div className="ParentClcks">
                <input  placeholder="write color" type="text" onChange={(event) => {setColor(event.target.value)}} />
                <button onClick={()=>{dispatch(changeColor(color))}}>Change Color Theme</button>
        </div>
    )
}

export default ChangeColor;
