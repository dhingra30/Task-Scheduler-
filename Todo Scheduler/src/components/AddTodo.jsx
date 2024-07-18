import styles from "./AddTodo.module.css";
import { useContext, useRef } from "react";
import { BiSolidMessageAdd } from "react-icons/bi";
import { TodoItemsObj } from "../store/todo-item-store";
function AddTodo() {
  const contextObj = useContext(TodoItemsObj);
  const handleClickButton = contextObj.addNewItem;
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleOnClick = (event) => {
    event.preventDefault();
    handleClickButton(
      todoNameElement.current.value,
      dueDateElement.current.value
    );
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };
  return (
    <div className={`${styles.container} container text-center`}>
      <form onSubmit={handleOnClick} className="row rd-row">
        <div className="col-6">
          <input
            className={styles["todoInput"]}
            ref={todoNameElement}
            type="text"
            placeholder="Enter Todo here"
          />
        </div>
        <div className={`${styles["todoInput"]} col-4`}>
          <input ref={dueDateElement} type="date" />
        </div>
        <div className="col-2">
          <button className={`${styles.buttonAmmend} btn-success rd-button`}>
            <BiSolidMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
