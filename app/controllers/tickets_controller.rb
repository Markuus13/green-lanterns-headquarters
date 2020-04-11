class TicketsController < ApplicationController
  def index
    @tickets = Ticket.all
  end

  def create
    ticket = Ticket.new(ticket_params)

    if ticket.save
      render json: ticket, status: :created
    else
      render json: { errors: ticket.errors.messages }, status: :unprocessable_entity
    end
  end

  private def ticket_params
    params.require(:ticket).permit(:title, :description)
  end
end