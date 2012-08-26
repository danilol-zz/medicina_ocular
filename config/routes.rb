MedicinaOcular::Application.routes.draw do
  resources :sites

  root :to => 'sites#index', :id => "home"
  get ":id" => "sites#index", :as => :page

end
