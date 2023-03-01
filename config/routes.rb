Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # resources :sitters, only: [:index, :show, :create, :update, :destroy]
  get '/sitters', to: 'sitters#index'
  get '/sitters/:id', to: 'sitters#show'
  post '/sitters', to: 'sitters#create'
  # delete '/sitters/:id', to: 'sitters#destroy'
  
  # resources :ratings
  # get '/ratings', to: 'ratings#index'
  post '/ratings', to: 'ratings#create'
  patch '/ratings/:id', to: 'ratings#update'
  delete '/ratings/:id', to: 'ratings#destroy'

end

# landing page is list my sitters not all sitters
# not my sitter until I review them - adding sitter is general adding
# add star to each review, nix avg
# add sitter errors

 