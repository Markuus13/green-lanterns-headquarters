import React, { useState } from 'react';

import greenLanternsApi from 'apis/greenLanternsApi';

const TicketForm = () => {
  const [title, setTittle] = useState('');
  const [description, setDescription] = useState('');
  const ticketParams = { ticket: { title, description }};

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await greenLanternsApi.createTicket(ticketParams);
      location.reload(true);
    } catch (e) {
      alert('Um erro ocorreu, mas os guardiões da galáxia resolverão seu problema...');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Título</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={event => setTittle(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="description">Descrição</label>
        <textarea
          id="description"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
      </div>

      <div>
        <input type="submit" value="Adicionar ticket"/>
      </div>
    </form>
  );
};

export default TicketForm;