import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
function Mycarousel({ photos }) {
    const imageStyle = {
        width: '100%',
        height: '500px',// ou la largeur souhaitée en pixels ou pourcentage
        display: 'block',
        margin: 'auto',
        objectFit: 'cover',
    };
    return (
        <div className='carousels'>
            <Carousel fade interval={5000}>
                 {
                    photos.map((item , index) =>(
                        <Carousel.Item key={index}>
                            <img height={300}
                                style={imageStyle}
                                className="d-block w-100 img-fluid"
                                src={item}
                                alt=""
                            />
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    );
};

export default Mycarousel;
