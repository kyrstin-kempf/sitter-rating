Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # resources :users, only: [:index, :show]
  # resources :sitteres, only: [:index, :show]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'user#show'

  get '/users', to: 'users#index'

  get '/', to: 'sitters#index'
  get '/sitters/:id', to: 'sitters#show'
  post '/sitters', to: 'sitters#create'
  patch '/sitters/:id', to: 'sitters#update'
  delete '/sitters/:id', to: 'sitters#destroy'

  get '/ratings', to: 'ratings#index'
  post '/ratings', to: 'ratings#create'
  patch '/ratings/:id', to: 'ratings#update'
  # delete '/ratings/:id', to: 'ratings#destroy'

end
