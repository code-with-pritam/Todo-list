import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoRow from "./components/TodoRow";
function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== "") setListTodo([...listTodo, inputText]);
  };
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };
  return (
    <div className="main-container">
      <div className="center-container">
        <h1 className="todo-heading">TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <TodoRow
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
            />
          );
        })}
        <TodoInput addList={addList} />
      </div>
    </div>
  );
}

export default App;
