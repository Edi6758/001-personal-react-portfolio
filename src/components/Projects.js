import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';

export const Projects = () => {

    const projects = [
        {
            link: "https://movenow-next.vercel.app/",
            title: "Move Now",
            description: "Técnica de pomodoro gameficada desenvolvida em React",
            imgUrl: projImg1,
        },
        {
            link: "https://vercel.com/edi6758/200-managing-your-finances",
            title: "Managing Your Finances",
            description: "Projeto para gestão de finanças",
            imgUrl: projImg2,
        },
        {
            link: "https://movenow-next.vercel.app/",
            title: "Move Now",
            description: "Técnica de pomodoro gameficada desenvolvida em React",
            imgUrl: projImg1,
        },
        {
            link: "https://vercel.com/edi6758/200-managing-your-finances",
            title: "Managing Your Finances",
            description: "Projeto para gestão de finanças",
            imgUrl: projImg2,
        },
        {
            link: "https://movenow-next.vercel.app/",
            title: "Move Now",
            description: "Técnica de pomodoro gameficada desenvolvida em React",
            imgUrl: projImg1,
        },
        {
            link: "https://vercel.com/edi6758/200-managing-your-finances",
            title: "Managing Your Finances",
            description: "Projeto para gestão de finanças",
            imgUrl: projImg2,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>

                        <div className="animate__animated animate__fadeIn">
                            <h2>Projetos</h2>
                            <p>Veja alguns dos projetos desenvolvidos no ano de 2023</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">ReactJS</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">off</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">off</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUp" className="animate__animated animate__slideInUp">
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                                projects.map((project, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...project}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <p>Seção em desenvolvimento, por favor volte mais tarde...</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <p>Seção em desenvolvimento, por favor volte mais tarde...</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}