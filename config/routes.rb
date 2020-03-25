Rails.application.routes.draw do
  root 'tickets#index'
  get '/tickets', to: 'tickets#index'
end
