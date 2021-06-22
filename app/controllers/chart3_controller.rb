class Chart3Controller < ApplicationController
  def index
    if params[:name] == "1"
      @chart_period = 100
    elsif params[:name] == "2"
      @chart_period = 7000
    else
      @chart_period = 1000
    end
  end
  def chartA
    @chart_period = 360
  end
  
  def chartB
    @chart_period = 720
  end
  
  def chartC
    @chart_period = 1440
  end
  
  def chartD
    @chart_period = 4320
  end
  
  def chartE
    @chart_period = 7200
  end
end
