import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll)

    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <Navbar className={scrolled ? "scrolled" : ""} expand='lg'>
            <Container>
                <Navbar.Brand href='#home'>
                    <img src={logo} alt='Logo' />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls='basic-navbar-nav'>
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>

                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link
                            href='#home'
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('home')}
                        >
                            Início
                        </Nav.Link>

                        <Nav.Link
                            href='#home'
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('home')}
                        >
                            Resumo
                        </Nav.Link>

                        <Nav.Link
                            href='#skills'
                            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('skills')}
                        >
                            Conhecimentos técnicos
                        </Nav.Link>

                        <Nav.Link
                            href='#projects'
                            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('projects')}
                        >
                            Projetos
                        </Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a target="_blank" href='https://www.linkedin.com/in/edivaldo-jr/'><img src={navIcon1} alt=''></img></a>
                            <a target="_blank" href='https://api.whatsapp.com/send/?phone=554891122392'><img src={navIcon2} alt=''></img></a>
                            <a target="_blank" href='https://www.instagram.com/edijr.py/'><img src={navIcon3} alt=''></img></a>
                        </div>
                        <button target="_blank" className='vvd' onClick={() => { window.location = 'https://inspirationdev.com/' }}><span>não click</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}