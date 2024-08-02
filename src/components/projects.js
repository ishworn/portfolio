import {Col ,Container , Tab ,Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import Nav from 'react-bootstrap/Nav';
import colorSharp2 from "../assets/img/color-sharp2.png"
import projectImg1 from "../assets/img/project-img1.png"
import projectImg2 from "../assets/img/project-img2.png"
import projectImg3 from "../assets/img/project-img3.png"



export const Projects = () => {

    const projects = [
        {
            title : "Business Startup",
            description: "Design & Development",
            imgUrl :projectImg1,
            link : "https://github.com/Edit-Enterprises/inventory",
        },
        {
            title : "Business Startup",
            description: "Design & Development",
            imgUrl :projectImg2,
            link : "https://github.com/ishworn/flask",
        },
        {
            title : "Business Startup",
            description: "Design & Development",
            imgUrl :projectImg3,
            link : "https://github.com/Edit-Enterprises/inventory",
        },
        {
            title : "Business Startup",
            description: "Design & Development",
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
