import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProfileTable from '../components/Profile/ProfileTable';
import Header from '../components/Header';
import NavTop from '../components/NavTop';
import HistoryTable from '../components/Profile/HistoryTable';
import Alert from 'react-bootstrap/Alert';
import Access from '../components/Profile/Access';
import Footer from '../components/Footer'
function profile(props) {
    return (
        <>
            <Header />
            <NavTop active="profile" />
            <Container className='mt-5 pt-5 col-sm-8 col-md-8 col-xl-8 col-lg-8'>
                <Row>
                    <Alert variant='secondary' className='fw-bold fs-4 my-4 py-3 rounded-0'>
                        PROFILE
                    </Alert>
                    <ProfileTable/>
                    <Alert variant='secondary' className='fw-bold fs-4 my-4 py-3 rounded-0'>
                        HISTORY
                    </Alert>
                    <HistoryTable/>
                    <Access/>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}

export default profile;