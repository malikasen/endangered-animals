import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import theme1 from './images/theme1.jpg' 
import theme2 from './images/theme2.jpg' 
import theme3 from './images/theme3.jpg'

function Hero() {
  return (
    <div>
      {/* <img src={theme} /> */}
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            height='600px'
            src={theme1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height='600px'
            src={theme2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height='600px'
            src={theme3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Hero;

// theme1 from https://greeniscool.biz/wp-content/uploads/2021/06/what-animals-are-endangered-1024x716.jpg
// theme2 from https://drb960u7vv58y.cloudfront.net/resize/187946/600/314/image.jpg
// theme3 from https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555927862/shape/mentalfloss/3332350-565x566_6.jpg
// theme4 elephant from https://vetpaw.org/wp-content/uploads/2020/05/vetpaw-news-1080x675.jpg
