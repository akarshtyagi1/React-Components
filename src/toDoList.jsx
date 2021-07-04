import React, { useState } from "react";
import List from "./list";

function TodoList() {
    var [listItem, setItem] = useState("");
    var [list, addToList] = useState(List);

    function handleSubmit() {
        listItem.length > 0 && addToList(prevValue => [...prevValue, listItem]);
        console.log(listItem.length);
    }

    function handleChange(event) {
        var item = event.target.value;
        setItem(item);
        console.log(listItem)
    }

    function unorderlist(item) {
        return <li>{item}</li>
    }

    return <div className="todolist">
        <h1>
            <span>To-Do List</span>
        </h1>
        <div className="inpButton">
            <input onChange={handleChange} name="listItem" type="text"></input>
            <button onClick={handleSubmit}>Add</button>

        </div>

        <div className="list">
            <ul>
                {list.map(unorderlist)}
            </ul>
        </div>

    </div>
}

export default TodoList;