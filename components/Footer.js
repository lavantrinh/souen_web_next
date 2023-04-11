import React from 'react';

function Footer(props) {
    return (
   
      
        <div className="bg-light">
        <footer className="pt-3 mt-4 container">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="/" className="nav-link px-2 text-dark">ホーム</a></li>
            <li className="nav-item"><a href="/greeting" className="nav-link px-2 text-dark">ご挨拶</a></li>
            <li className="nav-item"><a href="/profile" className="nav-link px-2 text-dark">会社概要</a></li>
            <li className="nav-item"><a href="/equipments" className="nav-link px-2 text-dark">主要設備</a></li>
            <li className="nav-item"><a href="/product" className="nav-link px-2 text-dark">技術紹介</a></li>
            <li className="nav-item"><a href="/recruit" className="nav-link px-2 text-dark">リクルート</a></li>
            <li className="nav-item"><a href="news" className="nav-link px-2 text-dark">ニュース</a></li>
            <li className="nav-item"><a href="/contact" className="nav-link px-2 text-dark">お問合わせ</a></li>
          </ul>
          <p className="text-center text-body-secondary">&copy; 2023 SOUEN Co.,Ltd</p>
        </footer>
      </div>
     
    );
}

export default Footer;