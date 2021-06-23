Rails.application.routes.draw do
  root to: 'login#index'
  
  get 'home', to: 'home#index'
  get 'login', to: 'login#index'
  
  get 'sample_chart2', to: 'chart2#index'
  get 'sample_chart1', to: 'chart1#index'
  get 'sample_chart3', to: 'chart3#index'
  get 'sample_chart4', to: 'chart4#index'
  get 'sample_chart5', to: 'chart5#index'
  get 'sample_chart6', to: 'chart6#index'
  get 'sample_chart7', to: 'chart7#index'
  
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
  
  get 'sample_chartA5', to: 'chart5#chartA'
  get 'sample_chartB5', to: 'chart5#chartB'
  get 'sample_chartC5', to: 'chart5#chartC'
  get 'sample_chartD5', to: 'chart5#chartD'
  get 'sample_chartE5', to: 'chart5#chartE'
  
  get 'sample_chartA6', to: 'chart6#chartA'
  get 'sample_chartB6', to: 'chart6#chartB'
  get 'sample_chartC6', to: 'chart6#chartC'
  get 'sample_chartD6', to: 'chart6#chartD'
  get 'sample_chartE6', to: 'chart6#chartE'
  
  get 'sample_chartA7', to: 'chart7#chartA'
  get 'sample_chartB7', to: 'chart7#chartB'
  get 'sample_chartC7', to: 'chart7#chartC'
  get 'sample_chartD7', to: 'chart7#chartD'
  get 'sample_chartE7', to: 'chart7#chartE'
  
end
