Rails.application.routes.draw do
  root 'static_pages#home'
  get 'contact' => 'static_pages#contact'

  get '/fb', to: 'links#fb'
  get '/insta', to: 'links#insta'
  get '/hsdh', to: 'links#hsdh'

end
