import React from 'react';

function LeftCard(props) {
    return (

        <div className="container col-xxl-8 px-4 py-3">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-sm-6 col-lg-6 col-md-6 col-xl-6">
                    <img src="https://placehold.jp/450x250.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" />
                </div>
                <div className="col-sm-6 col-lg-6 col-md-6 col-xl-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
                    <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                       
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default LeftCard;