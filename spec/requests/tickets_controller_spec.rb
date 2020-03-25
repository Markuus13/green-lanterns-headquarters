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
  end
end