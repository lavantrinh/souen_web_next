import React from 'react';
import Header from '../components/Header';
import NavTop from '../components/NavTop';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideBar from '../components/Equipments/LeftSideBar';
import EquipmentContent from '../components/Equipments/EquipmentContent';

function equipment(props) {
    return (
        <>
          <Header/>
          <NavTop active="equipment"/>
<Container className='mt-5 pt-5'>
  <Row>
    <Col xl={3} lg={3}>
    <LeftSideBar/>
    </Col>
    <Col xl={9} lg={9}>
    <EquipmentContent/>
    </Col>
  </Row>
</Container>
        </>
    );
}

export default equipment;