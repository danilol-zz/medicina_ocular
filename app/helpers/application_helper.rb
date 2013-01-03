module ApplicationHelper
  require 'open-uri'

  def title(value = "Home")
    content_for(:title){ value }
  end

  def area(value= "home")
    content_for(:area){ value }
  end

  def feed_textos
    doc = Nokogiri::XML(open("http://razoesparaacreditar.com/feed/"))
    textos = doc.xpath('//channel/item')[4..4]
  end

end
