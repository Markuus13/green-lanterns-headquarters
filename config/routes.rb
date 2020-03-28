Rails.application.routes.draw do
  root 'tickets#index'
  get '/tickets', to: 'tickets#index'
  post '/tickets', to: 'tickets#create'
end
