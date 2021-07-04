import React, { useState } from "react";



function Counter() {
    // var [final_value, callback] = useState(initial_state)
    var [count, setCount] = useState(0)

    function inc() {
        setCount(count + 1);
    }
    function dec() {
        setCount(count - 1);
    }
    return <div className="counterBox">
        <div>
            <h1 className="count">{count}</h1>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    </div>
}

export default Counter;