import { createContext } from "react";

export const TodoItemsObj = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
