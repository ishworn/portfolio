import {Col ,Container , Tab ,Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import Nav from 'react-bootstrap/Nav';
import colorSharp2 from "../assets/img/color-sharp2.png"
import projectImg1 from "../assets/img/fakenews.jpg"
import projectImg2 from "../assets/img/portfolio.png"
import projectImg3 from "../assets/img/project-img3.png"



export const Projects = () => {

    const projects = [
        {
            title : "Fake News Detectation System",
            description: "Flask is used to developed this system. We used RFA and Decision Tree to train the module.",
            imgUrl :projectImg1,
            link : "https://github.com/ishworn/FakeNewsDetectationSystem",
        },
        {
            title : " My Portfolio",
            description: "Using React i have developed simple website for my portfolio where you can see my details",
            imgUrl :projectImg2,
            link : "https://github.com/ishworn/portfolio",
        },
        {
            title : ".NET Project ",
            description: "This project is done for my skills on api.I have done this project from Youtube ",
            imgUrl :projectImg3,
            link : "https://github.com/ishworn/.NetProject",
        },
        {
            title : "CCTV Project",
            description: "This project is incompleted but in sometime i will completed it.Concept of this project is to developed the web app for live feed of camera. ",
            imgUrl :projectImg1,
            link : "https://github.com/Edit-Enterprises/inventory",
        },
        {
            title : "Business Startup",
            description: "Design & Development",
            imgUrl :projectImg3,
            link : "https://github.com/Edit-Enterprises/inventory",
        }


    ]
    return (
        <section className="project" id="project" >
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>lorem Ipsum</p>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                            <Nav variant="pills"  className="nav-pills mb-5 justify-content-center align-item-center " id = "pills-tab" >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first" >
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                    key = {index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                {/* <Tab.Pane  eventKey = "second" ></Tab.Pane>
                                <Tab.Pane  eventKey = "third" ></Tab.Pane> */}
                            </Tab.Content>
                        </Tab.Container>

                    </Col>
                </Row>

            </Container>
<img className="background-image-right" src={colorSharp2} alt="project"/>
        </section>

    )
}
