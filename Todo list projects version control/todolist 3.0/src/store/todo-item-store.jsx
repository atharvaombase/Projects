import { createContext, useContext } from "react";

export const todoitemcontext = createContext({
  todoitems: {},
  addNewItem: () => {},
  deleteItem: () => {},
});
