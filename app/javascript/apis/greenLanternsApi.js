import axios from 'axios';
import clientUtils from 'apis/clientUtils';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'X-CSRF-TOKEN': clientUtils.csrfToken(),
  },
});

const createTicket = async (ticketParams) => {
  return api.post('/tickets', ticketParams)
};

export default {
  createTicket,
};