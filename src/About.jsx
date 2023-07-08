import React from 'react';

export default function About() {
  return (
    <div className="about-info-content" style={{ color: 'white', textAlign: 'center' }}>
      <h2 className="heading-secondary">
        A PLACE TO WINE, A PLACE <span>TO DINE</span>
      </h2>

      <h4>We hope to see you soon!</h4>

      <p>
        Welcome to our restaurant, where we provide an exceptional dining experience in a warm and inviting atmosphere. 
      </p>

      <blockquote>
        "At our restaurant, we believe that food is not just nourishment, but an art form. Our talented chefs 
        combine exquisite flavors and creativity to bring you a culinary journey like no other."
      </blockquote>

      <p>
        We pride ourselves on using only the freshest ingredients sourced from local farmers and suppliers. 
        Our menu showcases a fusion of international cuisines, with a focus on quality and taste. 
        
      </p>
    </div>
  );
  }
