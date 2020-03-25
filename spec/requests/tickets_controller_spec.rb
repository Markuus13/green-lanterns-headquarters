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
end