import React from 'react';
import TicketsTable from 'components/TicketsTable';
import renderer from 'react-test-renderer';

const mockTickets = () => (
  [
    {
      order_number: '1',
      title: 'first',
      description: 'ameno'
    },
    {
      order_number: '2',
      title: 'second',
      description: 'dorime'
    }
  ]
)

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <TicketsTable
      tickets={mockTickets()}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});