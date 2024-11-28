import React from 'react';
import '../styles/planos.css';  // Importe o arquivo CSS

interface Plano {
  type: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  highlight?: string;
}

const Planos: React.FC = () => {
  const planos: Plano[] = [
    {
      type: "Básico",
      price: "Grátis",
      description: "Page seu lanche e receba no mesmo dia!",
      features: ["Todos nossos lanches pelo mesmo preço de sempre"],
      buttonText: "Baixar agora",
    },
    {
      type: "Premium",
      price: "R$ 19,90/mês",
      description: "Ganhe um lanche gratis sua escolha por mês!",
      features: ["Pode escolher qualquer lanche mesmo hein!"],
      buttonText: "Assinar",
      highlight: "",
    },
    {
      type: "Muito Premium",
      price: "R$ 79,90/mês",
      description: "Ganhe um lanche gratis da sua escolha por semana.",
      features: ["Pode escolher qualquer lanche mesmo hein!"],
      buttonText: "Assinar",
    },
  ];

  return (
    <div className="planos-container">
      <h2 className="planos-title">Nossos Planos</h2>
      <div className="cards-container">
        {planos.map((plano, index) => (
          <div key={index} className={`card ${plano.type === 'Premium' ? 'premium' : ''}`}>
            {plano.highlight && <span className={`highlight ${plano.highlight ? 'show' : ''}`}>{plano.highlight}</span>}
            <h3 className="type">{plano.type}</h3>
            <p className={`price ${plano.type === 'Premium' ? 'premium' : ''}`}>{plano.price}</p>
            <p className="description">{plano.description}</p>
            <button className={`button ${plano.type === 'Premium' ? 'premium' : ''}`}>{plano.buttonText}</button>
            <ul className="features-list">
              {plano.features.map((feature, i) => (
                <li key={i} className="feature">{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Planos;
