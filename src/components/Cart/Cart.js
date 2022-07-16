import { useCartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cartList, subTotal, shippingCost, removeItem, clear, confirmOrder } = useCartContext();

    return (
        cartList.length === 0 ?
            <Container fluid className="my-5 py-5 text-center">
                <p> En este momento tu carrito esta vacio, accede al home para realizar compras. </p>
                <Button as={Link} to={`/`} id="goHomeButton" size="md" variant="outline-dark" className="border-0 m-2">
                    <i className="bi bi-house h3"><span className="mx-2 px-2">Ir a comprar </span></i>
                </Button>
            </Container>
            :
            <Container id="checkOutItems">
                <ListGroup as="ul" className="list-group-flush my-5 py-2 d-flex">
                    {/* <ul className="list-group list-group-flush my-5 py-2 d-flex "> */}
                    <ListGroup.Item>
                        <Row className="g-0 mb-3 align-items-center">
                            <Col xs={5} className="text-center h5"> Producto </Col>
                            <Col xs={2} className="h5"> Precio </Col>
                            <Col xs={2} className="h5"> Cant. </Col>
                            <Col xs={2} className="h5"> Total </Col>
                            <Col xs={1} >
                                <Button onClick={() => { clear() }} id="clearButton" size="md" variant="outline-dark" className="border-0 mx-2">
                                    <i className="bi bi-trash h5 text-center"></i>
                                </Button>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    {cartList.map(prod =>
                        <ListGroup.Item key={prod.id}>
                            <Row className="g-0 mb-3 align-items-center">
                                <Col xs={5}>
                                    <Row as={Link} to={`/item/${prod.id}`} className="align-items-center justify-content-center flex-column flex-md-row text-decoration-none text-dark">
                                        <Col xs={12} md={{ span: 4, offset: 2 }} className="text-center">
                                            <img className="img_small" src={prod.thumbnail} alt={prod.title} />
                                        </Col>
                                        <Col xs={12} md={6} className="text-center text-md-start txt-lg-start txt-xl-start">
                                            <div>{prod.title}</div>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col xs={2}> $ {prod.price} </Col>
                                <Col xs={2}> {prod.qty} Kg</Col>
                                <Col xs={2}> $ {prod.price * prod.qty} </Col>
                                <Col xs={1}>
                                    <Button onClick={() => { removeItem(prod.id) }} id={"removeButton-" + prod.id} size="md" variant="outline-dark" className="border-0 m-2">
                                        <i className="bi bi-trash"></i>
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    )}
                    <ListGroup.Item>
                        <Row className="g-0">
                            <Col xs={6} className="text-center h6"></Col>
                            <Col xs={2} className="h6"></Col>
                            <Col xs={2} className="h6"> Sub Total</Col>
                            <Col xs={2} id="checkOutSubtotal" className="h6">${subTotal}</Col>
                        </Row>
                        <Row className="g-0">
                            <Col xs={6} className="text-center h6"></Col>
                            <Col xs={2} className="h6"></Col>
                            <Col xs={2} className="h6"> Envio</Col>
                            <Col xs={2} id="checkOutEnvio" className="h6"> ${shippingCost}</Col>
                        </Row>
                        <Row className="g-0">
                            <Col xs={6} className="text-center h6"></Col>
                            <Col xs={2} className="h6"></Col>
                            <Col xs={2} className="h5"> TOTAL</Col>
                            <Col xs={2} id="checkOutTotal" className="h5">${subTotal + shippingCost}</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item id="checkoutButton" className="list-group-item-action list-group-item-success text-center h4">

                        <Button as={Link} to={`/`} id="goHomeButton" size="md" variant="outline-dark" className="border-0 m-2">
                            <i className="bi bi-house h3"><span className="mx-2 px-2">Seguir comprando </span></i>
                        </Button>

                        <Button 
                            onClick={confirmOrder} 
                            id="confirmOderButton"
                            size="md" variant="outline-dark"
                            disabled={localStorage.getItem('currentUser') == null}
                            className="border-0 m-2">
                            <i className="bi bi-send-check h3"><span className="mx-2 px-2">Confirmar Pedido </span></i>
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Container>
    )
}

export default Cart;