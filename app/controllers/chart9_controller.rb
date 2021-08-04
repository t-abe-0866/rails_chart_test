class Chart9Controller < ApplicationController
  def index
    @chart_period = "A"
  end
  def chartA
    @chart_period = "A"
  end
  
  def chartB
    @chart_period = "B"
  end
  
  def chartC
    @chart_period = "C"
  end
  
  def chartD
    @chart_period = "D"
  end
  
  def chartE
    @chart_period = "E"
  end
end
