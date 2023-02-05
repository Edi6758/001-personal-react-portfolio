import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import headerImg from "../assets/img/header2-img.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Profile = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const toRotate = ["programador", "entusiasta", "curioso", "sonhador", "as vezes gamedev"];
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
        <section className="banner resume" id="resume">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animated__animated animated__fadeIn" : ""}>
                                    <span className="tagline">Sobre mim...</span>
                                    <h1>Quem é, <span className="fullstack-word">Edivaldo JR?</span><br></br><span className="wrap">{text}</span></h1>
                                    <p>Nascido e criado em Florianópolis. Cresci dentro de uma família humilde, com um pai cozinheiro e uma mãe faxineira. Desde jovem, eu sempre busquei formas de ajudar minha família financeiramente. Aos 14 anos entrei em um curso de desenvolvimento de jogos e comecei a dar meus primeiros passos com o desenvolvimento WEB. Em paralelo eu entregava panfletos para conseguir algum dinheiro extra. Quando completei 17 anos, comecei a trabalhar como auxiliar de cozinha. Foi durante esse período que eu mergulhei de cabeça no mundo da programação, ingressando como bolsista no SENAI e fazendo meus primeiros freelas. Eu sempre fui fascinado por tecnologia e vi nesse mercado uma oportunidade de crescer profissionalmente e ajudar ainda mais minha família. Comecei a estudar por conta própria e fiz alguns cursos na área e por fim ingressei na UFSC. Com o tempo, eu fui crescendo em minha carreira e hoje sou considerado um desenvolvedor Full Stack JS com quase 3 anos de experiência e mais de 20 projetos concluídos. Tenho experiência profissional em JavaScript, TypeScript e React. Tenho conhecimento em React Native, Node.js e GraphQL, Java, Python além de ter experiência com a plataforma VTEX. Minha jornada até aqui foi cheia de desafios, mas eu sempre enfrentei tudo com muita determinação e dedicação. Hoje, eu me sinto realizado por tudo o que conquistei e continuo buscando novos desafios para evoluir ainda mais em minha carreira</p>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}