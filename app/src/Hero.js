import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import th1 from './images/th1.jpg' 
import th2 from './images/th2.jpg'
import th3 from './images/th3.jpg'  

function Hero() {
  return (
    <div>
      {/* <img src={theme} /> */}
      <Carousel variant="dark">
        <Carousel.Item className='carousel'>
          <img
            className="d-block w-100"
            src={th1}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className='textbox'>
              <p>The World Wildlife Organization focuses on saving certain species that help sustain other species. They protect wildlife such as pandas, whales, rhinos, marine turtles, primates, polar bears, and big cats.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel'>
          <img
            className="d-block w-100"
            src={th2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className='textbox'>
              <p>A species is declared extinct after many years of not being spotted. Because it takes so long to define an entire species as extinct, it is probable that there are many species already gone that we are unaware of.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel'>
          <img
            className="d-block w-100"
            src={th3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className='textbox'>
              <p>99% of currently threatened species are at risk from human activities, primarily those driving habitat loss, introduction of exotic species, and global warming.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Hero;

// facts from https://www.dosomething.org/us/facts/11-facts-about-endangered-species
//th1 https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nwf.org%2FEducational-Resources%2FWildlife-Guide%2FMammals%2FBlue-Whale&psig=AOvVaw255kb6JnaycJHnLVUVmXrl&ust=1632113202518000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCMizn8-divMCFQAAAAAdAAAAABBC
//th2 https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nwf.org%2FEducational-Resources%2FWildlife-Guide%2FMammals%2FFlorida-Panther&psig=AOvVaw255kb6JnaycJHnLVUVmXrl&ust=1632113202518000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCMizn8-divMCFQAAAAAdAAAAABA9
//th3 https://www.google.com/url?sa=i&url=https%3A%2F%2Fbristolzoo.org.uk%2Flatest-zoo-news%2Fhow-the-work-of-bristol-zoological-society-is-helping-protect-threatened-species-in-the-zoo-and-around-the-world&psig=AOvVaw255kb6JnaycJHnLVUVmXrl&ust=1632113202518000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCMizn8-divMCFQAAAAAdAAAAABA2
