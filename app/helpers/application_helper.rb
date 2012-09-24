module ApplicationHelper
  def title(value = "Home")
    content_for(:title){ value }
  end

  def area(value= "home")
    content_for(:area){ value }
  end
end
