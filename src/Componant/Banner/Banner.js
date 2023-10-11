import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"
import img1 from '../../images/Telemedicine_Consult.jpg'
import img2 from '../../images/video-conference-call-doctor.jpg'
import img3 from '../../images/istockphoto-1127069581-612x612.jpg'
const Banner = () => {
    return (

        <Carousel className="carousel">
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src={img2}
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src={img3}
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


    );
};

export default Banner;