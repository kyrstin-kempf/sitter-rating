Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/sitters/search/:term', to: 'sitters#search'

  # passing in term to route
  # /sitters/search/sar (sarah, sara, etc.)
  # caps not matter
  # return sitter object (all sitters name matches search not exact)
 
  get '/sitters', to: 'sitters#index'
  get '/sitters/:id', to: 'sitters#show'
  post '/sitters', to: 'sitters#create'
  

  post '/ratings', to: 'ratings#create'
  patch '/ratings/:id', to: 'ratings#update'
  delete '/ratings/:id', to: 'ratings#destroy'

end


 