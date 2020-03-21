require 'rails_helper'

RSpec.describe 'Tickets requests', type: :request do

  describe 'GET /tickets' do
    before { get '/tickets' }

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end
end