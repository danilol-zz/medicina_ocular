MedicinaOcular::Application.routes.draw do
  resources :pages

  root  :to   => "pages#index", :id => "index"
  get  ":id"  => "pages#index", :as => :page
  post "pages/mail" => "pages#mail"
end
