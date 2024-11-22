import React from 'react';
import '../styles/ContactForm.css';

const ContactForm: React.FC = () => {
  return (
    <div className="contact-form-container">
      <h4 className="contact-form-subtitle">Envie sua dúvida</h4>
      <h1 className="contact-form-title">Entre em contato</h1>
      <p className="contact-form-description">
        Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um orçamento, uma dúvida técnica de algum de nossos produtos.
        Estamos à disposição para responder. 😊
      </p>
      <form className="contact-form">
        <input
          type="email"
          placeholder="Seu melhor Email"
          className="contact-form-input"
          required
        />
        <textarea
          placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?"
          className="contact-form-textarea"
          required
        />
        <button type="submit" className="contact-form-button">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
