import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'

const Loading = () => {
    return (
        <Row className="justify-content-center">
            <Spinner animation="grow" variant="secondary" role="status" className="my-5" >
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Row>
    )
}

export default Loading
