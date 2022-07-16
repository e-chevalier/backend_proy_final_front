import { createContext, useContext, useState, useEffect } from 'react'
import useCarrito from '../hooks/useCarrito';
import { config } from '../../config/config.js';

const BACKEND_SERVER = config.BACKEND_SERVER

const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
}


/**
 * Function that generates the context provider for all childrens 
 * @param {*} param0 
 * @returns 
 */

const CartContextProvider = ({ children }) => {

    const [products, loading, cartId, setCartid] = useCarrito();
    const [cartList, setCartList] = useState([])
    const [cartCounter, setCartCounter] = useState(0)
    const [subTotal, setSubTotal] = useState(0)
    const [shippingCost, setShippingCost] = useState(500)

    const [user, setUser] = useState(null)



    useEffect(() => {
        setCartList(products)

    }, [products, loading]);



    // /**
    //  * 
    //  */
    // const getUser = async () => {
    //     try {

    //         let options = {
    //             method: 'GET',
    //             credentials: 'include',
    //             headers: { 'Content-Type': 'application/json' }
    //         }

    //         await fetch(`${BACKEND_SERVER}/api/login`, options)
    //             .then(res => res.json())
    //             .then(res => { // JSON data parsed by `data.json()` call
    //                 console.log(res)
    //                 setUser(res.data || null)
    //                 //alert("GETUSER: " + res.data.username)
    //             })

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    /**
    *  Function to determine if an item is in the cart 
    * @param {*} itemId 
    * @returns 
    */
    const isInCart = (itemId) => {
        return (cartList.some(prod => prod.id === itemId))
    }

    /**
     * Function to add an Item to the cart 
     * @param {*} item 
     * @param {*} qty 
     */

    const addItem = (item, qty) => {
        if (isInCart(item.id)) { //The item is in the cart
            cartList.map(prod => prod.id === item.id ? prod.qty += qty : prod)
            setCartList(cartList)
        } else {  // The item is not in the cart
            item.qty = qty
            setCartList([...cartList, item])
        }

        let options = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id_prod: item.id }) }
        fetch(`${BACKEND_SERVER}/api/carrito/${cartId}/productos`, options)
            .then(res => res.json())
            .then(data => {
                console.log(data); // JSON data parsed by `data.json()` call
            })

        setCartCounter(cartCounter + qty)
        setSubTotal(subTotal + item.price * qty)
    }

    /**
     * Function to remove an item from the cart 
     * @param {*} itemId 
     */

    const removeItem = (itemId) => {
        let item = cartList.filter(prod => prod.id === itemId)[0]
        setCartCounter(cartCounter - item.qty)
        setSubTotal(subTotal - item.price * item.qty)
        setCartList(cartList.filter(prod => prod.id !== itemId))

        let options = { method: 'DELETE' }
        fetch(`${BACKEND_SERVER}/api/carrito/${cartId}/productos/${itemId}`, options)
            .then(res => res.json())
            .then(data => {
                console.log(data); // JSON data parsed by `data.json()` call
            })
    }


    /**
     *  Function to empty the cart 
     */

    const clear = async () => {

        try {

            // TODO: Iterate over cartList and restore the stock.
            console.log("Call clear()")
            setCartCounter(0)
            setCartList([])

            let options = { method: 'DELETE' }
            await fetch(`${BACKEND_SERVER}/api/carrito/${cartId}`, options)
                .then(res => res.json())
                .then(data => {
                    console.log(data); // JSON data parsed by `data.json()` call
                })

            let newCart_id = await (fetch(`${BACKEND_SERVER}/api/carrito/`, { method: 'POST' })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    return data.id
                }))
            setCartid(newCart_id)
            setCartList([])

        } catch (error) {
            console.log(error)
        }

    }


    /**
     * 
     */
    const confirmOrder = async () => {

        try {

            let shoppingList = cartList.map( 
                prod => ({
                    id: prod.id,
                    title: prod.title,
                    price: prod.price,
                    qty: prod.qty,
                    subTotal: prod.qty * prod.price}
            ))

            let body = { 
                cartId: cartId,
                shoppingList: shoppingList,
                subTotal: subTotal,
                shippingCost: shippingCost,
                total: shippingCost + subTotal,
                user: JSON.parse(localStorage.getItem('currentUser'))
            }

            let options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            }

            fetch(`${BACKEND_SERVER}/api/carrito/${cartId}/confirmorder`, options)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    alert("Gracias por su pedido.")
                })

        } catch (error) {
            console.log(error)
        }

    }



    return (
        <CartContext.Provider value={{ cartList, cartCounter, subTotal, shippingCost, setShippingCost, addItem, removeItem, clear, user, setUser, confirmOrder }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
