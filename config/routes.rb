Rails.application.routes.draw do
  root to: 'login#index'
  
  get 'home', to: 'home#index'
  get 'login', to: 'login#index'
  
  get 'sample_chart2', to: 'chart2#index'
  get 'sample_chart1', to: 'chart1#index'
  get 'sample_chart3', to: 'chart3#index'
  get 'sample_chart4', to: 'chart4#index'
  
  get 'sample_chartA', to: 'chart3#chartA'
  get 'sample_chartB', to: 'chart3#chartB'
  get 'sample_chartC', to: 'chart3#chartC'
  get 'sample_chartD', to: 'chart3#chartD'
  get 'sample_chartE', to: 'chart3#chartE'
  
  get 'sample_chartA4', to: 'chart4#chartA'
  get 'sample_chartB4', to: 'chart4#chartB'
  get 'sample_chartC4', to: 'chart4#chartC'
  get 'sample_chartD4', to: 'chart4#chartD'
  get 'sample_chartE4', to: 'chart4#chartE'
  
end
