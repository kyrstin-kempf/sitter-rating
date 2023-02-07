Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post '/login', to: 'sessions#create'
  get '/me', to: 'user#show'
  delete '/logout', to: 'sessions#destroy'
  
  # resources :sitters, only: [:index, :show, :create, :update, :destroy]
  get '/sitters', to: 'sitters#index'
  get '/sitters/:id', to: 'sitters#show'
  post '/sitters', to: 'sitters#create'
  patch '/sitters/:id', to: 'sitters#update'
  delete '/sitters/:id', to: 'sitters#destroy'
  
  # resources :ratings, only: [:index, :show, :create, :update]
  get '/ratings', to: 'ratings#index'
  post '/ratings', to: 'ratings#create'
  patch '/ratings/:id', to: 'ratings#update'

end
