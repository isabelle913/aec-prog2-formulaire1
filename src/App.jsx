import Container from "react-bootstrap/Container";
import CardForm from "./components/CardForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

function App() {
  return (
    <Container fluid className="bg-secondary">
      <Row className="p-5">
        <Col className="text-white h1">Bonjour Mathieu</Col>
        <Col>
          <Stack gap={3}>
            <Card bg="warning" text="white" className="text-center p-3 ">
              Try it free then $20/mo. thereafter
            </Card>
            <Card bg="white" className="p-3">
              <CardForm />
            </Card>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
