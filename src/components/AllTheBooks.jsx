import books from "../data/horror.json"
import { Component } from "react"
import {  Container, Row, Card, Button, Badge, Col } from "react-bootstrap"
class AllTheBooks extends Component{
    render(){
        
        return(

            <Container fluid>
                <Row>
              {
                books.map(book=>{
                    return(
                        
                            <Col lg={4} >
                            <Card style={{ width: '18rem' }} key={book.asin}>
                            <Card.Img variant="top" src={book.img} />
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>
                                    <Badge>Price: {book.price}</Badge>
                                </Card.Text>
                                <Button variant="success">More Info</Button>
                            </Card.Body>
                        </Card>
                            </Col>
                            
                        
                        
                    )
                })
              }
              </Row>
            </Container>
        )
    }
}

export default AllTheBooks