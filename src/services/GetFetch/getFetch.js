import { config } from '../../config/config.js';

const BACKEND_SERVER = config.BACKEND_SERVER

const getFetch = async (id = 0) => {

    try {

        let options = { 
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        }

        return await (fetch(`${BACKEND_SERVER}/api/productos${id !== 0 ? '/'+id: ''}`, options)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                return data.products
            }));
    } catch (err) {
        return console.log(err)
    }
    
}

export default getFetch;
