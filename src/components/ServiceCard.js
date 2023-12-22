import React from 'react';
import './ServiceCard.css'; // Make sure to create this CSS file

function ServiceCard({ title, image, description, price }) {
    return (
        <div className="service-card">
            <h4>{title}</h4>
            <img src={image} alt={title} className="service-image" />
            <p>{description}</p>
            <div className="price">{price}</div>
            <button className="buy-button">Comprar Ahora!</button>
        </div>
    );
}

export default ServiceCard;
