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
      description: "Baixe a ferramenta e comece a utilizar agora mesmo!",
      features: ["Com anúncios", "Até 10 produtos por dia", "Utilize sem limitação X"],
      buttonText: "Baixar agora",
    },
    {
      type: "Premium",
      price: "R$ 19,90/mês",
      description: "Para quem deseja utilizar nossa ferramenta sem limitações!",
      features: ["Sem interrupção de anúncios", "Utilize quantas vezes quiser", "Utilize todos os produtos disponíveis na plataforma"],
      buttonText: "Experimente de graça",
      highlight: "1º MÊS GRÁTIS",
    },
    {
      type: "Empresarial",
      price: "R$ 12,90/mês por dev",
      description: "Utilize nossa solução na sua empresa. Aprimore seu fluxo.",
      features: ["Com anúncios", "Até 10 produtos por dia", "Utilize sem limitação X"],
      buttonText: "Baixar agora",
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
