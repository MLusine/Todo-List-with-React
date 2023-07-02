import React, { useState } from "react";
import classes from "./TodoList.module.scss";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    setList([...list, newTodo]);

    setInput("");
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
    list.length--;
  };

  const checkTodo = (id) => {
    const newTodoList = list.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setList(newTodoList);
  };

  const getDoneTasks = () => {
    return list.filter((task) => task.done).length;
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.todoHeader}>To-do List </h1>
      <div className={classes.tasks}>
        <div className={classes.task}>
          All Tasks<p id="allTasks">{list.length}</p>
        </div>
        <div className={classes.task}>
          Tasks Done
          {<p id="tasksDone">{getDoneTasks()}</p>}
        </div>
      </div>
      <input
        type="text"
        placeholder="Type a new task"
        className={classes.taskInp}
        id="taskInput"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className={classes.btn} onClick={() => addTodo(input)}>
        Add
      </button>
      <div id="listContainer">
        <ul className={classes.li}>
          {list.map((todo) => (
            <li key={todo.id} className={classes.addTask}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => checkTodo(todo.id)}
              />
              {todo.todo}

              <button
                className={classes.btn}
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TodoList;
