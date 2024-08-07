import {Container ,Row ,Col} from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg'; 
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg'; 
import logo from '../assets/img/logo111.png';

export const Footer = () =>
{
    return(

        <footer className="footer">
            <Container>
                <Row className = "align-item-center" >

                    <Col sm ={6} >
                    <img  className="hhhh" src={logo} alt="Logo"  />
                    </Col>
                    <Col sm = {6} className="text-center text-sm-end" >
                    <div className='social-icon'>
                    <a href='#' ><img src={navIcon1}  alt="Logo"/></a>
                    <a href='#' ><img src={navIcon2}  alt="Logo"/></a>
                    <a href='#' ><img src={navIcon3}  alt="Logo"/></a>
                    
                </div>
                <p>CopyRight 2024. All Rights Reserve to Ishwor Nepal</p>

                    </Col>
                </Row>
            </Container>
        </footer>

    )
}