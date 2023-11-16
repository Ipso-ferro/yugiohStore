import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  const mypromise = async () => {
    try {
      const response = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php");
      const data = await response.json();
      setItems(data.data.slice(0, 20)); // Limitar a los primeros 20 elementos
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    mypromise();
  }, []);
  const getImageUrl = (id) => `https://images.ygoprodeck.com/images/cards_small/${id}.jpg`;

  return (
    <Container className="mt-4">
      <h1></h1>
      <Row>
        {items.map((card) => (
          <Col key={card.id} sm={12} md={6} lg={4} xl={3}>
            <Card style={{ height: "100%"}} className="h-80">
              <Card.Img variant="top" src={getImageUrl(card.id)} alt={card.name} />
              <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text>{card.desc}</Card.Text>
                {/* Agrega aquí cualquier otra información que desees mostrar */}
                <Button variant="primary"  className="mt-auto">Comprar</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemListContainer;