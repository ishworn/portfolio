import { useState  ,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo111.png';
import navIcon1 from '../assets/img/nav-icon1.svg'; 
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/gmail.svg';   
import cv from '../assets/img/CV2.pdf'
// import imagee from '../assets/img/aa.png'



export const NabBar  = () => 
    {
        const [activeLink , setActiveLink] = useState ('home');
        const [scrolled , setScrolled] = useState(false);

        useEffect(() =>{
            const onscroll = () =>{
                if(window.scrollY > 50){
                    setScrolled(true);
                }
                else {
                    setScrolled(false);

                }
            }
            window.addEventListener("scroll",onscroll);
            return () => window.addEventListener("scroll" , onscroll);

        },[])


        const  onUpdateActiveLink = (value)  => {

            setActiveLink(value); 
        }

 return(

            <Navbar expand="lg"  className ={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo}  alt="Logo"/>
           
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" > 
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className = {'home ' ? 'active navbar-link' : 'navbar-link ' } onClick ={()=>onUpdateActiveLink('home')  } >Home</Nav.Link>
            <Nav.Link href="#skills"  className = {'skills ' ? 'active navbar-link' : 'navbar-link ' } onClick ={()=>onUpdateActiveLink('skills')  } >Skills</Nav.Link>
            <  Nav.Link href="#projects"className = {'projects ' ? 'active navbar-link' : 'navbar-link ' }onClick ={()=>onUpdateActiveLink('projects')  }  >Projects</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='https://www.linkedin.com/in/ishwor-nepal-66100618b/' ><img src={navIcon1}  alt="Logo"/></a>
                    <a href='https://www.facebook.com/ishwor.nepal.739/' ><img src={navIcon2}  alt="Logo"/></a>
                    <a 
                    

                     href="https://mail.google.com/mail/?view=cm&fs=1&to=ishwornepal1234@gmail.com&su=Subject&body=Email%20body" target="_blank"


                    
                    ><img src={navIcon3}  alt="Logo"/></a>
                    
                </div>
                <button className='vvd' onClick={() => window.open(cv)}><span>Let's Connect</span></button>
            </span>
            
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
        );
    }