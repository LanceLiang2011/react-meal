import { createContext, useReducer } from "react";

export const CartListContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => null,
  removeItem: (item) => null,
});

const itemsReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const foundItem = state.find((item) => item.id === action.item.id);
      if (foundItem) {
        // console.log(foundItem);
        return state.map((item) => {
          if (item.id === action.item.id) {
            return { ...item, amount: action.item.amount + foundItem.amount };
          } else {
            return item;
          }
        });
      }
      return [action.item, ...state];
    }
    case "REMOVE": {
      const foundItem = state.find((item) => item.id === action.id);
      if (foundItem.amount === 1) {
        return state.filter((item) => item.id !== action.id);
      }
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      });
    }
    default: {
      return state;
    }
  }
};

const CartListContextProvider = ({ children }) => {
  const [items, dispatch] = useReducer(itemsReducer, []);
  console.log(items);
  const totalAmount = items.reduce((acc, cur) => acc + Number(cur.amount), 0);
  const addItem = (item) => {
    dispatch({ type: "ADD", item });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE", id });
  };

  return (
    <CartListContext.Provider
      value={{ items, totalAmount, addItem, removeItem }}
    >
      {children}
    </CartListContext.Provider>
  );
};

export default CartListContextProvider;
