import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import facultad from "../assets/facultad.jpg";
import ia1 from "../assets/robotito.jpg";
import ia2 from "../assets/personita.jpg";
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        <div className="row">
          <div className="col-md-8">
            {/* Carousel de React Bootstrap */}
            <Carousel className="mb-4 w-100">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={facultad}
                  alt="Facultad Regional de Tucumán"
                />
                <Carousel.Caption>
                  <h3>Facultad Regional de Tucumán</h3>
                  <p>Aquí desarrollamos esta app web.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ia1}
                  alt="Inteligencia Artificial"
                />
                <Carousel.Caption>
                  <h3>Inteligencia Artificial</h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ia2}
                  alt="Programador"
                />
                <Carousel.Caption>
                  <h3>Programador</h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-4">
            {/* Botones */}
            <div className="button-group">
              <div className="button-wrapper mb-2">
                <Link to="/tareas">
                  <button className="custom-button">
                    Agregar Tareas <br />
                    Administra tus tareas fácilmente.
                  </button>
                </Link>
              </div>
              <div className="button-wrapper mb-2">
                <Link to="/problemas">
                  <button className="custom-button">
                    Chatea con nuestro bot <br />
                    Obtén ayuda con problemas comunes
                  </button>
                </Link>
              </div>
              <div className="button-wrapper mb-2">
                <Link to="/nosotros">
                  <button className="custom-button">
                    Contáctanos <br />
                    Encuentra información de contacto
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
