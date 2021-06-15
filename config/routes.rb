Rails.application.routes.draw do
  root to: 'login#index'
  
  get 'home', to: 'home#index'
  get 'login', to: 'login#index'
  
  get 'sample_chart1', to: 'chart1#index'
  get 'sample_chart2', to: 'chart2#index'
  get 'sample_chart3', to: 'chart3#index'
  
end
