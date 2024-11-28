import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm: React.FC = () => {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null); 

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    
    if (!email || !message) {
      setStatus('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch('https://natanmail.azurewebsites.net/api/httptrigger1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          toMail: email,
          content: message,
        }),
      });
    
      if (!response.ok) {
        const errorDetails = await response.json();
        console.error('Erro no servidor:', errorDetails);
        setStatus(`Erro: ${response.statusText}`);
      } else {
        setStatus('E-mail enviado com sucesso!');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      console.error('Erro na conexão:', error);
      setStatus('Erro ao conectar ao servidor.');
    }
    
    
  };

  return (
    <div className="contact-form-container">
      <h4 className="contact-form-subtitle">Envie sua dúvida</h4>
      <h1 className="contact-form-title">Entre em contato</h1>
      <p className="contact-form-description">
        Entre em contato, estamos dispostos a tirar qualquer dúvida de algum de nossos produtos.
        Estamos à disposição para responder. 😊
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Seu melhor Email"
          className="contact-form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <textarea
          placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?"
          className="contact-form-textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)} 
          required
        />
        <button type="submit" className="contact-form-button">
          Enviar
        </button>
      </form>
      {status && <p className="contact-form-status">{status}</p>} 
    </div>
  );
};

export default ContactForm;
