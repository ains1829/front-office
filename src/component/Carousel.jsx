import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import image_test from '../assets/image/occasion.jpg'
import image_other from '../assets/image/6034768.jpg'
function Mycarousel({id}){
    console.log(id)
    const imageStyle = {
        width: '100%',  // ou la largeur souhaitée en pixels ou pourcentage
        display: 'block',
        margin: 'auto',
    };
    
  return (
    <div className='carousels'>
        <Carousel fade interval={5000}>
        <Carousel.Item>
            <img
            style={imageStyle}
            className="d-block w-100 img-fluid"
            src={image_test}
            alt=""
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            style={imageStyle}
            className="d-block w-100 img-fluid"
            src={image_other}
            alt=""
            />
        </Carousel.Item>
        </Carousel>
    </div>
  );
};

export default Mycarousel;
