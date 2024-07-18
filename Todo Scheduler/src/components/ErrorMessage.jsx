import { useContext } from "react";
import styles from "./ErrorMessage.module.css";
import { TodoItemsObj } from "../store/todo-item-store";
const ErrorMessage = () => {
  const contextObject = useContext(TodoItemsObj);
  const todoItems = contextObject.todoItems;
  return (
    todoItems.length === 0 && (
      <p className={styles.paragraph}>Enjoy Your day!</p>
    )
  );
};

export default ErrorMessage;
