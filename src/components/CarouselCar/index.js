import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';

function CarouselCar() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {/* <Carousel.Item>
        <img
          className=" w-5"
          src="https://resources.turo.com/f/81934/386x308/9bf274f19e/image_make_jeep-2x.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}

<Carousel.Item style={{ height: 500 }}>
  <Stack
    direction="horizontal"
    className="h-100 justify-content-center align-items-center"
    gap={3}
  >
    <Card>...</Card>
    <Card>...</Card>
    <Card>...</Card>
  </Stack>
</Carousel.Item>

    </Carousel>
  );
}

export default CarouselCar;