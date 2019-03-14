Rails.application.routes.draw do
  root 'presses#new'

  resources :presses, except: [:edit]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
