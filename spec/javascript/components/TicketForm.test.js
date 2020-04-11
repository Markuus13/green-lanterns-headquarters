import React from 'react';
import TicketForm from 'components/TicketForm';
import { render, fireEvent, waitFor } from '@testing-library/react';

jest.mock('axios');
jest.mock('apis/greenLanternsApi');
jest.mock('apis/clientUtils');

describe('Ticket creation', () => {
  const { location } = window;

  beforeAll(() => {
    delete window.location;
    window.location = { reload: jest.fn() };
  });

  afterAll(() => {
    window.location = location;
  });

  test('it reloads the page after submit', async () => {
    const { getByText, getByLabelText } = render(<TicketForm/>);

    const titleInput = getByLabelText('Título');
    fireEvent.change(titleInput, { target: { value: 'Some title' } });

    const descriptionInput = getByLabelText('Descrição');
    fireEvent.change(descriptionInput, { target: { value: 'Case description' } });

    const submitButton = getByText('Adicionar ticket');
    fireEvent.click(submitButton);

    await waitFor(() => expect(window.location.reload).toHaveBeenCalled());
  });
});