import { useState , useEffect  } from "react"
import{ Container ,Row, Col}  from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons"
import headerImg from '../assets/img/ishwor2.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import cv from '../assets/img/cv.pdf'

export const Banner = () =>{

    const [loopNum ,setLoopNum] = useState(0);
    const [isDeleting , setIsDeleting] = useState(false);
    const  toRotate = [ "Ishwor Nepal",  "a Web Developer"," a Web Designer"," a UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta ,setIsDelta] = useState(300 - Math.random()* 100);
    const period  = 2000;

    useEffect(()=> {
        let ticker = setInterval(()=>{
              tick();
              
        },
        delta
        )
        return () => { clearInterval(ticker)};

    },
    [text]
)
 const tick = ()=> {
    let i = loopNum %   toRotate.length;
    let fullText = toRotate[i];
    let  updatedText = isDeleting ? fullText.substring(0, text.length -  1) : fullText.substring(0 , text.length + 1);
    setText(updatedText);

    if (isDeleting){
        setIsDelta(prevDelta => prevDelta /2)
    }

    if(!isDeleting && updatedText === fullText){
        setIsDeleting(true);
        setIsDelta(period);

    }
    else if (isDeleting && updatedText === ''){
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIsDelta(500);
    }

 } 


    return(
        <section className="banner" id= "home">
            <Container>
                <Row>
                   <Col  xs={12} md ={6} xl ={7} >
                   <TrackVisibility>
                   {({ isVisible }) =>
                   <div className = {isVisible ?" animate__animated animate__bounce" : "" }      >
                   <span className="tagline">
                    Welcome to my portfolio
                   </span>
                   <h1> {"Hi I'm "} <span className="wrap">{text}</span></h1>
                   <p>hyy

                   </p>
                   <button onClick={()=> window.open(cv)} > Lets Connect<ArrowRightCircle size={25}/> </button>
                   </div>
}
                   </TrackVisibility>
                   </Col >
                 
                   <Col    xs={12} md ={6} xl ={5}  >
                   <img   className="ishwor"  src={headerImg}  alt="Header Img"   />
                   </Col>
                </Row>
            </Container>

        </section>
    )
        
    
}