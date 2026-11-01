import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const initialDetails = { firstName: '', lastName: '', email: '', phone: '', message: '' };
  const [formDetails, setFormDetails] = useState(initialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});
  const onFormUpdate = (key, value) => setFormDetails({ ...formDetails, [key]: value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setButtonText('Enviando...');
    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(formDetails),
      });
      const result = await response.json();
      if (result.code === 200) {
        setStatus({ success: true, message: 'Mensaje enviado correctamente.' });
        setFormDetails(initialDetails);
      } else {
        setStatus({ success: false, message: 'No se pudo enviar. Revisa la configuracion del correo en README.md.' });
      }
    } catch (error) {
      setStatus({ success: false, message: 'Activa el servidor de correo siguiendo las instrucciones de README.md.' });
    }
    setButtonText('Enviar');
  };

  return <section className="contact" id="connect"><Container><Row className="align-items-center">
    <Col size={12} md={6}><TrackVisibility>{({ isVisible }) => <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Ilustracion de contacto" />}</TrackVisibility></Col>
    <Col size={12} md={6}><TrackVisibility>{({ isVisible }) => <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
      <h2>Hablemos</h2>
      <form onSubmit={handleSubmit}><Row>
        <Col size={12} sm={6} className="px-1"><input required type="text" value={formDetails.firstName} placeholder="Nombre" onChange={(e) => onFormUpdate('firstName', e.target.value)} /></Col>
        <Col size={12} sm={6} className="px-1"><input type="text" value={formDetails.lastName} placeholder="Apellido" onChange={(e) => onFormUpdate('lastName', e.target.value)} /></Col>
        <Col size={12} sm={6} className="px-1"><input required type="email" value={formDetails.email} placeholder="Correo electronico" onChange={(e) => onFormUpdate('email', e.target.value)} /></Col>
        <Col size={12} sm={6} className="px-1"><input type="tel" value={formDetails.phone} placeholder="Telefono (opcional)" onChange={(e) => onFormUpdate('phone', e.target.value)} /></Col>
        <Col size={12} className="px-1"><textarea required rows="6" value={formDetails.message} placeholder="Cuentame sobre tu proyecto" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea><button type="submit"><span>{buttonText}</span></button></Col>
        {status.message && <Col><p className={status.success ? "success" : "danger"}>{status.message}</p></Col>}
      </Row></form>
    </div>}</TrackVisibility></Col>
  </Row></Container></section>;
};
