class TicketsController < ApplicationController
  def index
    @tickets = Ticket.all
  end

  def create
    ticket = Ticket.create(ticket_params)
    render json: ticket, status: :created
  end

  private def ticket_params
    params.require(:ticket).permit(:title, :description)
  end
end