require 'rails_helper'

RSpec.describe 'Tickets requests', type: :request do

  describe 'GET /tickets' do
    let!(:tickets) { create_list(:ticket, 3) }

    before { get '/tickets' }

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end

    it 'shows tickets titles in its body' do
      tickets_titles = tickets.map(&:title)
      expect(response.body).to include(*tickets_titles)
    end

    describe 'when tickets list is empty' do
      let(:empty_message) { 'Parece que o universo está em paz, mas não por muito tempo...' }

      before { tickets.each(&:destroy) }

      it 'shows a message' do
        get '/tickets'
        expect(response.body).to include(empty_message)
      end
    end
  end

  describe 'POST /tickets' do
    let(:valid_attributes) do
      {
        ticket: {
          title: 'Something happened',
          description: 'Explanation'
        }
      }
    end

    subject { post '/tickets', params: valid_attributes }

    it 'returns status code 201' do
      subject
      expect(response).to have_http_status(201)
    end

    it 'creates a ticket' do
      expect { subject }.to change { Ticket.count }.from(0).to(1)
    end

    it 'returns created ticket' do
      subject
      expect(JSON.parse(response.body)['title']).to eq(valid_attributes[:ticket][:title])
    end
  end
end