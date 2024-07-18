import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import { useState } from "react";
import { TodoItemsObj } from "./store/todo-item-store";

function App() {
  const initialTodoItems = [];
  let [todoItems, setTodoItems] = useState(initialTodoItems);

  const addNewItem = (itemName, itemDueDate) => {
    let newTodoItems = [...todoItems, { name: itemName, dueDate: itemDueDate }];
    setTodoItems(newTodoItems);
  };

  const deleteItem = (itemToDelete) => {
    let todoTasks = [...todoItems];
    todoTasks = todoTasks.filter((item) => item.name !== itemToDelete);
    setTodoItems(todoTasks);
  };

  const defaultValue = [{ name: "Buy Ghee", dueDate: "Today" }];

  return (
    <TodoItemsObj.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todocontainer">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <ErrorMessage></ErrorMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsObj.Provider>
  );
}

export default App;
