import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel.css'
const BootstrapCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/mainimg.jpg"
          alt="First slide"
          style={{ maxHeight: '500px', objectFit: 'cover'}}
        />
        {/* <Carousel.Caption>
          <h3>Slide 1</h3>
          <p>Nulla vitae elit libero pulvinar aliquam.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/mainimg.jpg"
          alt="Second slide"
          style={{ maxHeight: '500px', objectFit: 'cover', }}
        />

        {/* <Carousel.Caption>
          <h3>Slide 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="cycle d-block w-100"
          src="/assets/cycle.webp"
          alt="Third slide"
          style={{ maxHeight: '500px', objectFit: 'cover', }}
        />

        {/* <Carousel.Caption>
          <h3>Slide 3</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default BootstrapCarousel;