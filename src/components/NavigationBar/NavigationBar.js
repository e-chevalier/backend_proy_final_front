import { useState, useEffect } from 'react';
import "../../App.css";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Loading from "../Loading/Loading";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button'
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import useFetch from '../../hooks/useFetch';
import RegistrationFormContainer from '../RegistrationFormContainer/RegistrationFormContainer';
import LoginFormContainer from '../LoginFormContainer/LoginFormContainer';
import Logout from '../logout/Logout';
import { useCartContext } from '../../context/CartContext';



const NavigationBar = () => {

  const { user } = useCartContext()
  const [products, loadingProducts] = useFetch();
  const [codes, setCodes] = useState([]);
  const [loadingCodes, setLoadingCodes] = useState(true);



  useEffect(() => {
    if (!loadingProducts) {
      const arrayTemp = [];
      products.forEach(prod => { if (!(arrayTemp.includes(prod.code))) { arrayTemp.push(prod.code) } });
      setCodes(arrayTemp);
      setLoadingCodes(false);
    }
    return () => {
      setLoadingCodes(true);
    }
  }, [user, products, loadingProducts])


  const getUserData = () => {
    let currentUser = localStorage.getItem('currentUser')
    return currentUser ? JSON.parse(currentUser) : { username: '' }
  }


  return (
    loadingCodes ? <Loading />
      :
      <header>
        <Container fluid>
          <Navbar bg="light" expand="lg">

            <Container fluid>
              <Navbar.Brand as={Link} to={'/'}>
                <img src="/assets/icons/logo_small.png" alt="Mi Logo" width="60" height="60" />
              </Navbar.Brand>

              <Navbar.Text className="d-flex justify-content-between text-right order-lg-1 px-md-4">
                <Link to={'/cart'}>
                  <CartWidget />
                </Link>
                <Navbar.Toggle className="border-0 mx-3" aria-controls="navbarScroll" />
              </Navbar.Text>

              <Navbar.Collapse id="navbarScroll">
                <Nav id="navbarNavContent" className="me-auto mb-2 mb-lg-0" style={{ maxHeight: '300px' }}  >
                  {
                    codes.map(code =>
                      <NavDropdown key={code} title={code} id={`navbarScrollingDropdown-${code}`}>
                        <NavDropdown.Item as={Link} to={`/category/${code}`}>Todas las {code}</NavDropdown.Item>
                        <NavDropdown.Divider />
                        {
                          products
                            .filter(prod => prod.code === code)
                            .map(prod =>
                              <NavDropdown.Item key={prod.id} as={Link} to={`/item/${prod.id}`}>{prod.title}</NavDropdown.Item>
                            )
                        }
                      </NavDropdown>)
                  }
                </Nav>

                <div className="d-flex flex-row align-items-center pe-4">
                  <span> {getUserData().username}</span>
                </div>

                <div className="d-flex flex-row align-items-center">

                  {
                    localStorage.getItem('currentUser') ?
                      <>
                      <Button variant="outline-primary mx-4" as={Link} to={`/chat/${getUserData().email}`}> Ayuda </Button>
                      <Logout /> 
                      </>:
                      <>
                        <RegistrationFormContainer />
                        <LoginFormContainer />
                      </>
                  }
                </div>

              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </header>
  );
};

export default NavigationBar;
