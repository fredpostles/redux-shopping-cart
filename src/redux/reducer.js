import { initialState } from "./initialState";
import {
  ON_BUY_NOW,
  SET_API_DATA,
  SET_SCREEN_MODE,
  SET_SEARCH_TERM,
  ON_DELETE_ITEM,
  INCREMENT,
  DECREMENT,
} from "./types";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_API_DATA:
      return { ...state, products: action.payload };
    case SET_SCREEN_MODE:
      return { ...state, screenMode: action.payload };
    case SET_SEARCH_TERM: {
      //filter products
      const filteredData = [...state.products].filter((product) => {
        // check if product matches search term
        if (product.title.toLowerCase().includes(action.payload.toLowerCase()))
          return true;
        else return false;
      });

      return { ...state, searchTerm: action.payload, filteredData };
    }
    case ON_BUY_NOW: {
      const shoppingCartItems = [...state.shoppingCartItems];

      const indexOfCartItem = shoppingCartItems.findIndex(
        (item) => item.id === action.payload
      );

      if (indexOfCartItem > -1) {
        shoppingCartItems[indexOfCartItem].quantity += 1;
      } else {
        shoppingCartItems.push({ id: action.payload, quantity: 1 });
      }
      return { ...state, shoppingCartItems };
    }
    case ON_DELETE_ITEM: {
      const shoppingCartItems = [...state.shoppingCartItems];

      const indexOfCartItem = shoppingCartItems.findIndex(
        (item) => item.id === action.payload
      );

      shoppingCartItems.splice(indexOfCartItem, 1);
      return { ...state, shoppingCartItems };
    }
    case INCREMENT: {
      const shoppingCartItems = [...state.shoppingCartItems];
      console.log(shoppingCartItems);

      const indexOfCartItem = shoppingCartItems.findIndex(
        (item) => item.id === action.payload
      );

      shoppingCartItems[indexOfCartItem].quantity += 1;

      return { ...state, shoppingCartItems };
    }
    case DECREMENT: {
      const shoppingCartItems = [...state.shoppingCartItems];
      console.log(shoppingCartItems);

      const indexOfCartItem = shoppingCartItems.findIndex(
        (item) => item.id === action.payload
      );

      shoppingCartItems[indexOfCartItem].quantity -= 1;

      // remove the item if quantity becomes 0

      if (shoppingCartItems[indexOfCartItem].quantity === 0) {
        shoppingCartItems.splice(indexOfCartItem, 1);
      }
      return { ...state, shoppingCartItems };
    }
    default:
      return state;
  }
}
