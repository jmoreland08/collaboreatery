import React from 'react';
import './Carousel.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Carousels() {
  return (
    <div id="carousel-div">
    <Carousel id="landing-carousel">
  <Carousel.Item>
    <img
      className="d-block"
      src="https://images.unsplash.com/photo-1515669097368-22e68427d265?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="https://images.unsplash.com/photo-1560187839-85fa7adfcf39?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc3RhdXJhbnRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="https://images.unsplash.com/photo-1512838154171-97c4fa39f33b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHJlc3RhdXJhbnRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
      </Carousel>
      </div>
    
  )
}
