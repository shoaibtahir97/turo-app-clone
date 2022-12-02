import "./Drive.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Drive() {
  return (
    <>
      <Container className="drive">
        <Row>
          <Col><h1 className="find">Find your drive</h1></Col>
        </Row>
        <Row>
          <Col><p className="explore">Explore the world's largest car sharing marketplace</p></Col>
        </Row>
      </Container>
    </>
  );
}

export default Drive;
