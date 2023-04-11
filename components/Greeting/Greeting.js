import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
function Greeting(props) {
    return (
        <Container className='mt-5 pt-3'>
            <Alert variant='secondary' className='mt-5 rounded-0 fs-4'>
                代表取締役メッセージ
            </Alert>
            <Row className='justify-content-md-center'>
                <Col className='col-sm-5 col-xl-5 col-md-5 col-lg-5'>
                    <Image src='/img/_N8A0468_DxOFP.jpg' />

                </Col>
                <Col className='col-sm-5 col-xl-5 col-md-5 col-lg-5'>
                    <blockquote className="blockquote fw-bold">
                        <p>ものづくりをもっと面白く「製造を創造する」</p>
                    </blockquote>
                    <p className='lh-lg'>私たちは、愛知県の名古屋市港区で、薄板の精密板金を中心とした金属加工をしております。経営理念を「製造を創造する～私たちは豊かな未来へ、ものづくりの可能性を追求し、挑戦していく事で社会に貢献する製造創造企業を目指します」と掲げ、「明日を夢見て昨日を反省し今日を生きよう」という行動理念のもと、全社一丸となり、社会に役立つヒト・モノ・コト創りを常に追求し続けております。<br />
                        技術の進歩が著しい昨今におきましても、お客様の多様なニーズにお応え出来るよう、CAD/CAM一貫生産や、機械とデータのネットワーク化一元管理など、スピード感を持って、より良い製品提供に努めて参りました。近年ではベトナム(ホーチミン)に事務所を設立するなど、海外展開も積極的に行い、ネットワークを広げ、よりお客さまのお役に立てるよう日々邁進しております。<br />
                        これからも社員一同、「明日の可能性を無限大」に、夢を創りあげる技術集団として、一日一日を大切に日々成長できるよう高度な技術へ挑戦し、新たな可能性への追及を進めて参ります。<br />
                        今後とも一層のご支援を賜わりますよう心からお願い申し上げます。</p>
                    <p className='fs-5 fw-bold'>代表取締役: 服部太志</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Greeting;