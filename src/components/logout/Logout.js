import React from 'react'
import Button from 'react-bootstrap/Button'
import { config } from '../../config/config.js';
import { useCartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';


const BACKEND_SERVER = config.BACKEND_SERVER

const Logout = () => {

    const { clear, setUser } = useCartContext()
    let navigate = useNavigate();

    const handleLogout = async (event) => {

        try {
            let options = { 
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            }
            
            await fetch(`${BACKEND_SERVER}/api/logout`, options)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setUser(null)
                    clear()  
                    localStorage.removeItem('currentUser')
                    localStorage.removeItem('coderJWT')
                    localStorage.removeItem('localCartId')
                })
            //window.location.reload()
            setTimeout(() => {
                navigate('/')
            }, 1000);
           

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Button variant="secondary" onClick={handleLogout}>
            Logout
        </Button>
    )
}

export default Logout