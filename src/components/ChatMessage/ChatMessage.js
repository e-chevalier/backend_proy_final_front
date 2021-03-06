import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

const ChatMessage = ({ message }) => {

    console.log(message)

    return (
        <Col className="col py-4 px-4 px-lg-2 py-lg-3">
            <Card className="h-100 mx-2">
                <Card.Header className="position-relative">
                    <Row className="h-50 g-0 text-decoration-none text-body">
                        <Card.Title>{message.author?.id}</Card.Title>
                        <Card.Text>{message.date}</Card.Text>
                    </Row>
                </Card.Header>

                <Row className="h-50 g-0 text-decoration-none text-body">
                    <Card.Body>
                        <Card.Text>{message.text}</Card.Text>
                    </Card.Body>
                </Row>
            </Card>
        </Col>

    )
}

export default ChatMessage
