import 'dotenv/config'

let config = {
    BACKEND_SERVER: process.env.REACT_APP_BACKEND_SERVER || "http://127.0.0.1:8080"
}

export { config }