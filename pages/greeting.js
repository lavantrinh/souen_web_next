import React from 'react';
import Header from '../components/Header';
import NavTop from '../components/NavTop';
import Greeting from '../components/Greeting/Greeting';

function greeting(props) {
    return (
       <>
       <Header/>
       <NavTop active="greeting"/>
       <Greeting/>
       </>
    );
}

export default greeting;