import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
import img3 from "../assets/6.jpg";
const Services = () => {
  return (
    <div id="services" className="services">
      <Carousel
       infiniteLoop
       autoPlay
       interval={3000}
       showStatus= {false}
       showArrows={false}
       showThumbs={false}
       showIndicators={false}
      >
        <div className="carousel-slide">
          <img src={img1} alt="Full Stack development" />
          <p
          style={{padding:10,
           fontWeight: 800,
           backgroundColor: 'black',
           color: "white"
          }}
           className="course">Full Stack Development</p>
        </div>
        <div className="carousel-slide">
          <img src={img2} alt="DevOps development" />
          <p
          style={{padding:10,
           fontWeight: 800,
           backgroundColor: 'black',
           color: "white"
          }}
         className="course">DevOps Development</p>
        </div>
        <div className="carousel-slide">
          <img src={img3} alt="Artificial intelligence (AI) " />
          <p
          style={{padding:10,
           fontWeight: 800,
           backgroundColor: 'black',
           color: "white"
          }}
         className="course">Artificial intelligence (AI) </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
