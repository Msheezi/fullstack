Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index, :show]
      
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :destroy, :show, :index]
    resources :comments, only: [:create, :index, :destroy]
    get 'posts/:post_id/comments', to: 'posts#comments'
    
    end
  
  root to: 'root#root'

end
