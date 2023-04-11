import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavTop(props) {
  let active=props.active;
    return (
        <Navbar bg="light" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand href="/" className='text-dark fw-bold fs-3'>SOUEN</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link  className={active==='home'? 'text-dark fw-bold' : 'text-dark'} href="/">ホーム</Nav.Link>
            <Nav.Link className={active==='greeting'? 'text-dark fw-bold' : 'text-dark'} href="/greeting">ご挨拶</Nav.Link>
            <Nav.Link className={active==='profile'? 'text-dark fw-bold' : 'text-dark'} href="/profile">会社概要</Nav.Link>
            <Nav.Link className={active==='equipment'? 'text-dark fw-bold' : 'text-dark'} href="/equipment">主要設備</Nav.Link>
            <Nav.Link className={active==='product'? 'text-dark fw-bold' : 'text-dark'} href="/product">技術紹介</Nav.Link>
            <Nav.Link className={active==='recruit'? 'text-dark fw-bold' : 'text-dark'} href="/recruit">リクルート</Nav.Link>
            <Nav.Link className={active==='news'? 'text-dark fw-bold' : 'text-dark'} href="/news">ニュース</Nav.Link>
            <Nav.Link className={active==='contact'? 'text-dark fw-bold' : 'text-dark'} href="/contact">お問合わせ</Nav.Link>
          </Nav>
          <Nav.Link href="tel:+0523848150" className='text-dark fs-3'><i className="bi bi-telephone"></i> 052-384-8150</Nav.Link> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavTop;