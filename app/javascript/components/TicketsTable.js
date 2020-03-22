import React from 'react'
import PropTypes from 'prop-types'

const TicketsTable = ({ tickets }) => (
  <table>
    <thead>
      <tr>
        <th>Número do Chamado</th>
        <th>Título</th>
        <th>Descrição</th>
      </tr>
    </thead>
    <tbody>
      {tickets.map((ticket) => (
        <tr key={ticket.order_number}>
          <td>{ticket.order_number}</td>
          <td>{ticket.title}</td>
          <td>{ticket.description}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

TicketsTable.propTypes = {
  tickets: PropTypes.arrayOf(
    PropTypes.shape({
      order_number: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string
    })
  )
}

export default TicketsTable