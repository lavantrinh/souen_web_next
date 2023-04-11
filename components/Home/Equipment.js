import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
function Equipment(props) {
    return (
        <Container>
        <h2 className="pb-2 border-bottom text-center">OUR PRODUCTS</h2>
     <Row className='my-5 text-center'>
       <Col xl={3} lg={3} md={6}>
       <Card className='border-0 rounded-0'>
     <Card.Img className='rounded-0' variant="top" src="https://placehold.jp/450x350.png" />
     <Card.Body>
       <Card.Title>Quickly design and customize</Card.Title>
     </Card.Body>
   </Card>
       </Col>
       <Col xl={3} lg={3} md={6}>
       <Card className='border-0 rounded-0'>
     <Card.Img className='rounded-0' variant="top" src="https://placehold.jp/450x350.png" />
     <Card.Body>
       <Card.Title>Quickly design and customize</Card.Title>
     </Card.Body>
   </Card>
       </Col>
       <Col xl={3} lg={3} md={6}>
       <Card className='border-0 rounded-0'>
     <Card.Img className='rounded-0' variant="top" src="https://placehold.jp/450x350.png" />
     <Card.Body>
       <Card.Title>Quickly design and customize</Card.Title>
     </Card.Body>
   </Card>
       </Col>
       <Col xl={3} lg={3} md={6}>
       <Card className='border-0 rounded-0'>
     <Card.Img className='rounded-0' variant="top" src="https://placehold.jp/450x350.png" />
     <Card.Body>
       <Card.Title>Quickly design and customize</Card.Title>
     </Card.Body>
   </Card>
       </Col>
     </Row>
     <Row className='my-5'>
       <Col xl={3} lg={3} md={6}>
       <Card className='border-0 rounded-0'>
     <Card.Img className='rounded-0' variant="top" src="https://placehold.jp/450x350.png" />
     <Card.Body>
       <Card.Title>Quickly design and customize</Card.Title>
     </Card.Body>
   </Card>
       </Col>
       <Col xl={3} lg={3} md={6}>
       <Card className='border-0 rounded-0'>
     <Card.Img className='rounded-0' variant="top" src="https://placehold.jp/450x350.png" />
     <Card.Body>
       <Card.Title>Quickly design and customize</Card.Title>
     </Card.Body>
   </Card>
       </Col>
       <Col xl={3} lg={3} md={6}>
       <Card className='border-0 rounded-0'>
     <Card.Img className='rounded-0' variant="top" src="https://placehold.jp/450x350.png" />
     <Card.Body>
       <Card.Title>Quickly design and customize</Card.Title>
     </Card.Body>
   </Card>
       </Col>
       <Col xl={3} lg={3} md={6}>
       <Card className='border-0 rounded-0'>
     <Card.Img className='rounded-0' variant="top" src="https://placehold.jp/450x350.png" />
     <Card.Body>
       <Card.Title>Quickly design and customize</Card.Title>
     </Card.Body>
   </Card>
       </Col>
     </Row>
 </Container>
    );
}

export default Equipment;