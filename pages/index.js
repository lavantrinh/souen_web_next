
import Header from '../components/Header';
import NavTop from '../components/NavTop';
import Jumbotron from '../components/Home/Jumbotron';
import ServiceList from '../components/Home/ServiceList';
import Product from '../components/Home/Product';
import LeftCard from '../components/Home/LeftCard';
import RightCard from '../components/Home/RightCard';
import Equipment from '../components/Home/Equipment';
import Contact from '../components/Home/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header/>
      <NavTop active="home"/>
      <Jumbotron/>
      <ServiceList/>
      <LeftCard/>
      <Equipment/>
      <RightCard/>
      <Product/>
      <Contact/>
      <Footer/>
    </>
  )
}
