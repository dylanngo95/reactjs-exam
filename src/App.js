import Header from './components/header/Header';
import Body from './components/body/Body';
import './App.css';
import { Canvas, useFrame } from '@react-three/fiber'
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Header></Header>
        </Col>
        <Col xs={10}>
          <Body></Body>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
