import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
function Access(props) {
    return (
        <Container>
            <Alert variant='secondary' className='fw-bold fs-4 my-4 py-3 rounded-0'>
                ACCESS
            </Alert>
            <Row>
         <Col xl={6} lg={6}>
         <Table>
                <tbody>
                    <tr>
                        <th>住所</th>
                        <td><address className='fs-5'>
                        〒455-0804<br />
                        名古屋市港区当地4丁目2203<br />
                       Fax: 052-381-8817<br />
                        <a href='tel:+0523848150'>052-384-8150</a><br />
                        <a href='mailto:hattori@k-souen.co.jp'>hattori@k-souen.co.jp</a>
                        
                    </address></td>
                    </tr>
                    <tr>
                        <th>勤務時間</th>
                        <td>8:00 ~ 17:00</td>
                    </tr>
                    <tr>
                        <th>休日</th>
                        <td>当社カレンダーによる。</td>
                    </tr>
                    <tr>
                        <th>交通</th>
                        <td>車通勤可。公共交通機関市バス「明徳橋」徒歩5分</td>
                    </tr>
                </tbody>
            </Table>
         </Col>
         <Col xl={6} lg={6}>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2307.883063945302!2d136.83818775930723!3d35.11071770036915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600377f40877a965%3A0xa22807496cb457c8!2z5qCq5byP5Lya56S-5Ym15YaG!5e0!3m2!1sja!2sjp!4v1681174288733!5m2!1sja!2sjp" width="550" height="320" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
         </Col>
            </Row>
           
        </Container>

    );
}

export default Access;