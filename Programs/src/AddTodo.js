import React, { useState } from "react";
import TodoList from "./TodoList";
import NoDiv from "./NoDiv";
function AddTodo() {
  const [todo, setUserTodo] = useState([]);
  const [savetodo, setSaveTodo] = useState("");

  function userTodo(e) {
    e.preventDefault();
    const newTodo = {
      id: Math.random().toString(),
      value: savetodo,
      isDeleated: false,
    };
    if (savetodo !== "") {
      setUserTodo([...todo, newTodo]);
      setSaveTodo("");
    }
  }

  function deletTodo(e) {
    // console.dir(e.target.parentElement.id);
    for (let check of todo) {
      if (e.target.parentElement.parentElement.id === check.id) {
        check.isDeleated = true;
        setUserTodo(
          todo.filter((el) => {
            if (el.isDeleated === false) {
              return true;
            }
            return false;
          })
        );
      }
    }
    console.log(todo);
  }
  function deleteAll() {
    setUserTodo([]);
  }
  let todos = <div style={{ margin: "20px" }}>No To-Dos Found</div>;
  if (todo.length !== 0) {
    todos = <TodoList data={todo} delFun={deletTodo} />;
  }
  function todoState(e) {
    setSaveTodo(e.target.value);
  }
  return (
    <NoDiv>
      <hr />
      <form onSubmit={userTodo}>
        <input
          type="text"
          placeholder="Add New To-Do"
          value={savetodo}
          onChange={todoState}
        />
        <button type="submit">Add Todo</button>
        <button type="button" onClick={deleteAll}>
          Delete All
        </button>
      </form>
      {todos}
    </NoDiv>
  );
}
export default AddTodo;
