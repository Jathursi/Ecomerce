import React from 'react';
import Calender from './Calender';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../Assets/img.png';
import Card from 'react-bootstrap/Card';
import img from '../Assets/img.png'

function Main() {
  return (
    <div className=''>
      <div className='add row mx-1'>
        <div className='carosal col-8'>
          <Carousel className='mt-2'>
            <Carousel.Item>
              <img
                src={ExampleCarouselImage}
                alt="First slide"
                className="image d-block w-100"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={ExampleCarouselImage}
                alt="Second slide"
                className="image d-block w-100"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={ExampleCarouselImage}
                alt="Third slide"
                className="image d-block w-100"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className='col-4 d-flex justify-content-center col mt-3'>
          <div>
            <Calender />
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-between mb-3'>
        <h2 className='m-3'>Categories</h2>
        <h4 className='m-3'>Shop More</h4>
      </div>
      <div className='catelog d-flex justify-content-center row mb-4 mx-4 gap-4'>
        <Card style={{ width: '10rem', border: 'none' }}>
          <Card.Img variant="top" src={img} className=''/>
          <Card.Body>
              <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: '10rem',  border: 'none'}}>
          <Card.Img variant="top" src={img} className=''/>
          <Card.Body>
              <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: '10rem', border: 'none' }}>
          <Card.Img variant="top" src={img} className=''/>
          <Card.Body>
              <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: '10rem', border: 'none' }}>
          <Card.Img variant="top" src={img} className=''/>
          <Card.Body>
              <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: '10rem',border: 'none' }}>
          <Card.Img variant="top" src={img} className=''/>
          <Card.Body>
              <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: '10rem', border: 'none' }}>
          <Card.Img variant="top" src={img} className=''/>
          <Card.Body>
              <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div className='add2 d-flex justify-content-center'>
        <div className='carosal2 col-8'>
          <Carousel className=' mt-2'>
            <Carousel.Item>
              <img
                src={ExampleCarouselImage}
                alt="First slide"
                className="image2 d-block w-100"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Main;
