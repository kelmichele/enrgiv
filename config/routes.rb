Rails.application.routes.draw do
  root 'static_pages#home'
  get 'contact' => 'static_pages#contact'
  get 'enrG+', to: 'static_pages#enrG+', as: 'enrg-plus'
  get 'menu' => 'static_pages#menu'
  get 'iv-therapy' => 'static_pages#iv-therapy'
  get 'book-appt' => 'static_pages#book-appt'
  get 'page' => 'static_pages#page'


  get '/fb', to: 'links#fb'
  get '/insta', to: 'links#insta'
  get '/hsdh', to: 'links#hsdh'

end
