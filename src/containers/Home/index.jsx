import React from 'react';

const Home = () => {
  return (
    <div className="container home-container" data-testid="home-container">
      <div className="home-header" data-testid="home-header">
        25 itens
      </div>
      <div className="cards" data-testid="cards">
        <div className="cards__card">
          <figure className="card__image">
            <span className="card_promotion" />
            <img
              src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912"
              alt=""
            />
          </figure>
          <div className="card__info">
            <strong>VESTIDO TRANSPASSE BOW</strong>
            <span>R$ 199,90</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
