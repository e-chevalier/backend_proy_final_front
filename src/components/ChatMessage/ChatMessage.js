import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

const ChatMessage = ({ message }) => {

    console.log(message.author?.avatar)

    return (
        <Col className="col py-4 px-4 px-lg-2 py-lg-3">
            <Card className="h-100 mx-2">
                <Card.Header className="position-relative">
                    <Row className="h-50 g-0 text-decoration-none text-body">
                        <Col xs={3} sm={2} md={2} lg={1} >
                            <img id="img" className="card-img-top" src={`${message.author?.avatar}`} alt={message.title} />
                        </Col>
                        <Col xs={{span: 8, offset: 1 }} sm={{span: 8, offset: 2}} md={{span: 8, offset: 2}} lg={{span: 9, offset: 2 }}>
                            <Card.Title>{message.author?.name} {message.author?.surname}</Card.Title>
                            <Card.Text>{message.date}</Card.Text>
                        </Col>
                    </Row>
                </Card.Header>

                <Row className="h-50 g-0 pt-3 text-decoration-none text-body">
                        <Card.Body>
                            <Card.Text>{message.text}</Card.Text>
                        </Card.Body>
                </Row>
            </Card>
        </Col>

    )
}

export default ChatMessage
