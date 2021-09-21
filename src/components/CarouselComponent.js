import React from "react";
import Carousel from "react-bootstrap/Carousel";
import basketball from "../images/basketball.jpg";
import freethrow from "../images/freethrow.jpg";
import footballRun from "../images/footballRun.jpg";
import classes from "./carouselStyle.module.css";

function CarouselComponent(props) {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className={classes.carouselImg}
          src={basketball}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Basketball Floater.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={classes.carouselImg}
          src={freethrow}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Basktball freethrow.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={classes.carouselImg}
          src={footballRun}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p> Football run. </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
