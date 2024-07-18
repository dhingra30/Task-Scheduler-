import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoItemsObj } from "../store/todo-item-store";
const TodoItems = () => {
  const { todoItems, deleteItem } = useContext(TodoItemsObj);
  return (
    <div className={styles["items-container"]}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          handleDeleteButton={deleteItem}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
