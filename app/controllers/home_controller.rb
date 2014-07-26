class HomeController < ApplicationController
  def Index
    @Header = 'Form title'
    @FormText = 'Put any text here'
    @FooterText = 'Footer text'
  end
end