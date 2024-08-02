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
          .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
            publicKey: 'YOUR_PUBLIC_KEY',
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
  <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>


            
            <Container>
                <Row className="align-item-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={sendEmail}>
                            <Row>
                                <Col md={6} className="px-1">
                                    <input 
                                        type="text" 
                                        value={formDetails.firstName} 
                                        placeholder="First Name" 
                                       
                                    />
                                </Col>
                                <Col md={6} className="px-1">
                                    <input 
                                        type="text" 
                                        value={formDetails.lastName} 
                                        placeholder="Last Name" 
                                       
                                    />
                                </Col>
                                <Col md={6} className="px-1">
                                    <input 
                                        type="text" 
                                        value={formDetails.email} 
                                        placeholder="Email" 
                                        
                                    />
                                </Col>
                                <Col md={6} className="px-1">
                                    <input 
                                        type="text" 
                                        value={formDetails.phone} 
                                        placeholder="Phone" 
                                   
                                    />
                                </Col>
                                <Col md={6} className="px-1">
                                    <textarea 
                                        rows={6} 
                                        value={formDetails.message} 
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


