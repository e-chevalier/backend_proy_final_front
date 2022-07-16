import React from 'react'
import Button from 'react-bootstrap/Button'
import { config } from '../../config/config.js';

const BACKEND_SERVER = config.BACKEND_SERVER

const Logout = () => {

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
                    localStorage.removeItem('currentUser')
                })

            window.location.reload()

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