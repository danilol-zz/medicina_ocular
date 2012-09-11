MedicinaOcular::Application.routes.draw do
  resources :pages

  root :to => 'pages#index', :id => "home"
  get ":id" => "pages#index", :as => :page

end
