import { useState , useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from '@emailjs/browser';


export const Contact = () => {


    
    const [buttonText, setButtonText] = useState('Send');
   


    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
        .sendForm('service_l5ncjqe', 'template_hrd50gv', form.current, {
            publicKey: '9BjEG1D9YfaKcUHmm',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    

    return (
        <section className="contact" id="contact">
            <Container>


         




                
                <Row className="align-item-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={sendEmail}      ref={form}   >
                            <Row>
                                <Col md={6} className="px-1">
                                    <input 
                                        type="text" 
                                        name="first_name"
                                        
                                        placeholder="First Name" 
                                      
                                    />
                                </Col>
                                <Col md={6} className="px-1">
                                    <input 
                                        type="text" 
                                        name="last_name"
                                       
                                        placeholder="Last Name" 
                                       
                                    />
                                </Col>
                                <Col md={6} className="px-1">
                                    <input 
                                        type="text" 
                                        name="email"
                                         
                                        placeholder="Email" 
                                        
                                    />
                                </Col>
                                <Col md={6} className="px-1">
                                    <input 
                                        type="text" 
                                        name="phone"
                                      
                                        placeholder="Phone" 
                                      
                                    />
                                </Col>
                                <Col md={6} className="px-1">
                                    <textarea 
                                        rows={6} 
                                        name="message"
                                     
                                        placeholder="Message" 
                                   
                                    ></textarea>
                                    <button type="submit">
                                        <span>{buttonText}</span>
                                    </button>
                                </Col>
                             
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};






