import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Lo que puedo construir para tu negocio</h2>
                        <p>Transformo procesos diarios en herramientas web que ayudan a trabajar con m&aacute;s orden. He desarrollado soluciones para tiendas, gesti&oacute;n de estudiantes y materias, y control de ventas e inventario. &iquest;Tienes un proceso que quieres simplificar? Hablemos.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Aplicaciones web a la medida</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>Sistemas para comercios</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Gesti&oacute;n acad&eacute;mica</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Ventas e inventario</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
