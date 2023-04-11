import React from 'react';
import Image from 'react-bootstrap/Image'
function Jumbotron(props) {
    return (
        <div className="p-5 mb-4 rounded-3">
        <div className="container py-5 text-center">
        <Image className='mt-5 pt-5' style={{width: '60%'}} src='/img/22.png'/>
          <h1 className="display-3 fw-bold text-center mt-5">Build Something Amazing</h1>
          <p className="col-md-12 fs-4 text-center">Must today firm from bag. Investment try cold a when capital. Everything wait person service.</p>
           
        </div>
      </div>
    );
}

export default Jumbotron;