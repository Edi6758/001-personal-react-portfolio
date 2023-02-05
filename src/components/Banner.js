import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const toRotate = ["JavaScript", "TypeScript", "ReactJS", "NodeJS", "VTEX IO"];
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img" />
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animated__animated animated__fadeIn" : ""}>
                                    <span className="tagline">Fico feliz em te ver aqui, seja bem vindo!</span>
                                    <h1>Olá, conheça minha <span className="fullstack-word">stack:</span><br></br><span className="wrap">{text}</span></h1>
                                    <p>Olá, me chamo Edivaldo Jr e sou um desenvolvedor full-stack altamente capacitado com vasta experiência em JavaScript, TypeScript, React e VTEX IO. Possuo conhecimento em React Native, Node e GraphQL, Java e Python. Com quase 3 anos de experiência e mais de 20 projetos nacionais e internacionais no currículo, posso garantir que sou um profissional dedicado e apto a atuar em qualquer desafio. Permita-me apresentar meu portfólio e comprovar minhas habilidades para que eu possa contribuir com sua equipe e alcançarmos juntos o sucesso.</p>
                                    <button onClick={() => { window.location = 'https://api.whatsapp.com/send/?phone=554891122392' }}>Entre em contato <ArrowRightCircle size={25} /> </button>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}