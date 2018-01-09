Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :show, :update]
    resources :photos, only: [:index, :create, :show, :update, :destroy]
    resources :follows, only: [:index, :create]
    resource :session, only: [:create, :destroy]

    delete '/users/:id/unfollow', to: 'users#unfollow'
  end
end
