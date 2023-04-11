import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Contact(props) {
    return (
        <Container>
            <h2 className="pb-2 border-bottom text-center">CONTACT</h2>
            <Row className='my-5'>
                
                <Col className='col-sm-6 col-lg-6 col-md-6 col-xl-6'>
                    <address className='fs-5'>
                        <span className='fw-bold'>株式会社創円</span><br />
                        名古屋市港区当地4丁目2203<br />
                       Fax: 052-381-8817<br />
                        <a href='tel:+0523848150'>052-384-8150</a><br />
                        <a href='mailto:hattori@k-souen.co.jp'>hattori@k-souen.co.jp</a>
                        
                    </address>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2307.883063945302!2d136.83818775930723!3d35.11071770036915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600377f40877a965%3A0xa22807496cb457c8!2z5qCq5byP5Lya56S-5Ym15YaG!5e0!3m2!1sja!2sjp!4v1681174288733!5m2!1sja!2sjp" width="550" height="400" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Col>
                <Col className='col-sm-6 col-lg-6 col-md-6 col-xl-6'>
                    <Form>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>お名前</Form.Label>
                            <Form.Control type="text" placeholder="サンプル太郎" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="phone">
                            <Form.Label>お電話番号</Form.Label>
                            <Form.Control type="text" placeholder="080-xxxx-xxxx" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>メールアドレス</Form.Label>
                            <Form.Control type="text" placeholder="xxx@email.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>タイトル</Form.Label>
                            <Form.Control type="text" placeholder="問い合わせタイトル" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>お問い合わせ内容</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="お問い合わせ内容を入力してください" />
                        </Form.Group>
                        <Button className='px-5 py-3' variant="outline-secondary" type="submit">
                            送信
                        </Button>
                    </Form>

                </Col>
            </Row>
        </Container>
    );
}

export default Contact;