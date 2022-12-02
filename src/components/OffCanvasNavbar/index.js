import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {BsList} from 'react-icons/bs';


function OffcanvasNavbar() {

   
    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} expand={expand} className="mb-3">
                    <Container fluid >
                        <Navbar.Brand href="#"><img src="https://logos-world.net/wp-content/uploads/2022/05/Turo-Symbol.png" width="94" alt="logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Nav.Link href="#action1"><button className="host">Become a host</button></Nav.Link>
                        
                        <NavDropdown  id="navbarScrollingDropdown"> 
                            <NavDropdown.Item href="#action3">Log in</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Sign up</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Become a host</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">How Turo works</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Contact Support</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Legal</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Insurance & protection</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Host tools</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Carculator</NavDropdown.Item>
                        </NavDropdown>

                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="top"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <img src="https://logos-world.net/wp-content/uploads/2022/05/Turo-Symbol.png" width="100" alt="logo" />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-2">
                                    {/* <Nav.Link href="#action2">Link</Nav.Link> */}
                                    <NavDropdown
                                        title="Dropdown"
                                    // id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action3">Login</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Sign up</NavDropdown.Item>
                                        <NavDropdown.Item href="#action5">Become a host</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">How Turo works</NavDropdown.Item>
                                        <NavDropdown.Item href="#action6">Contact Support</NavDropdown.Item>
                                        <NavDropdown.Item href="#action7">Legal</NavDropdown.Item>
                                        <NavDropdown.Item href="#action8">Insurance and Protection</NavDropdown.Item>
                                        <NavDropdown.Item href="#action9">Host tools</NavDropdown.Item>
                                        <NavDropdown.Item href="#action0">Calculator</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default OffcanvasNavbar;