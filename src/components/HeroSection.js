import React from 'react';
import './HeroSection.css'; // Import the CSS file
import servicePersonPhoto from '../assets/servicePerson.jpeg'; // Adjust the path to your photo
import service1Img from '../assets/management.png'
import service2Img from '../assets/interview.png'
import service3Img from '../assets/linkedin.png'
import ServiceCard from './ServiceCard';

function HeroSection() {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Your Path to Success in the Canadian Job Market Starts Here</h1>
                    <p>Hi I'm Vivian - CEO VCCV Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button className="contact-button">
                        Contact Us
                    </button>
                </div>
                <img src={servicePersonPhoto} alt="Service Person" className="service-photo"/>
            </div>
            <div className="services-section">
                <h2 className='services-title'>Nuestros Servicios</h2>
                <div className="card-container">
                    <ServiceCard 
                        title="Sesoría de Hoja de Vida"
                        image={service1Img}
                        description="Description of Service 1"
                        price="CAD$19,99"
                    />
                    <ServiceCard 
                        title="Simulacro de Entrevista"
                        image={service2Img}
                        description="Description of Service 2"
                        price="CAD$9,99"
                    />
                    <ServiceCard 
                        title="Optimizacion de Perfil LinkedIn"
                        image={service3Img}
                        description="Description of Service 3"
                        price="CAD$11,99"
                    />
                </div>
            </div>
           
        </div>
    );
}

export default HeroSection;
