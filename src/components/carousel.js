import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
 


function CarouselFade() {
  return (
    <div>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/564x/c3/57/38/c3573830a82b6f2cd49e2a92242cfb85.jpg"
          alt="First house"
        />
        <Carousel.Caption>
          <h3>House 1</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/564x/d3/7d/b3/d37db3b497efb6ec53cac85101480f77.jpg"
          alt="Second house"
        />

        <Carousel.Caption>
          <h3>House 2</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/564x/52/0c/90/520c902498459dc70d05b17a573b9882.jpg"
          alt="Third house"
        />

        <Carousel.Caption>
          <h3>House 3</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></div>
  );
}

export default CarouselFade;