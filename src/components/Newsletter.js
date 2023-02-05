
import { Col, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons"

export const Newsletter = ({ status, message, onValidated }) => {

    return (
        <Col lg={12}>
            <div className="newsletter-bx wow slideInUp">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Entre em contato comigo!</h3>
                    </Col>
                    <Col md={6} xl={7}>
                        <div className="new-email-bx">
                            <input placeholder="=============================>" readOnly />
                            <button onClick={() => { window.location = 'https://api.whatsapp.com/send/?phone=554891122392' }}>contato <ArrowRightCircle size={25} /> </button>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}