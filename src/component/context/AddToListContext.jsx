import { createContext, useState, useContext } from "react";
const AddToListContext = createContext();

// 3️⃣ Store the cart and allow updates
export function CartProvider({ children }) {
    const [addToList, setaddToList] = useState([]); // Stores the cart items
  
    // Function to add an item to the cart
    const addToLists = (product) => {
        setaddToList([...addToList, product]);
    };
    const removeFromList = (id) => {
        setaddToList(addToList.filter((item) => item.id !== id));
    };
      <AddToListContext.Provider value={{ addToList, addToLists, removeFromList }}>
      {children}
    </AddToListContext.Provider>
}

