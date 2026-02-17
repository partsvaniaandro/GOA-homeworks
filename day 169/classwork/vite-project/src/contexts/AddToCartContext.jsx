import { createContext, useState} from "react";
export const AddToCartContext = createContext()
export const AddToCartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addToCart = (item) => {
        setCart(prev => [...prev, item])
    }
    const removeFromCart = (clickedId) => {
        setCart(prev => prev.filter(cartItem => cartItem.id !== clickedId))
    }

    return(
        <AddToCartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            { children }
        </AddToCartContext.Provider>
    )
}