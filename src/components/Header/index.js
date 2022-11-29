import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
    return (
        <>
            <Container fluid className="first-header">
                <Row>
                    <Col>
                        <a href="http://localhost:3000" className="newFeature">Turo has launched in New York! Tap to explore cars.</a>
                    </Col>
                </Row>
            </Container>

            
        </>
    )
}

export default Header;