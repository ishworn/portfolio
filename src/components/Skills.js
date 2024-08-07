import Carousel from 'react-multi-carousel';
import{ Container ,Row, Col}  from "react-bootstrap"
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/front.jpg";
import meter2 from "../assets/img/backend.jpg";
import meter3 from "../assets/img/php.svg";
import meter4 from "../assets/img/python.jpeg";
import meter5 from "../assets/img/communication.jpg";






import colorSharpe from "../assets/img/color-sharp.png";


export const Skills = ()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };    
      return(
        <section   className='skill'  id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className='skill-bx'>
                        <h2>Skills</h2>
                        <p>lorem Ipsum</p>
                        <Carousel responsive={responsive} infinite = {true} className='skill-slider' >
                          <div className='item'>
                            <img src={meter1} alt='Image'/>
                            <h1>Frontend  </h1>
                          </div>
                          <div className='item'>
                            <img src={meter2} alt='Image'/>
                            <h1>Backend  </h1>
                          </div>
                          <div className='item'>
                            <img src={meter3} alt='Image'/>
                            <h1>Python </h1>
                          </div>
                          <div className='item'>
                            <img src={meter4} alt='Image'/>
                            <h1>PHP
                                </h1>
                          </div>
                          <div className='item'>
                            <img src={meter5} alt='Image'/>
                            <h1>Communication
                                </h1>
                          </div>
                        </Carousel>

                    </div>
                    </Col>
                </Row>
            </Container>
            <img  className='background-image-left' src={colorSharpe} ></img>
        </section>
      )



}
