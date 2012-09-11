class SitesController < ApplicationController
  def index
    if params[:id] && template_exists?(params[:id], ["page"])
      render params[:id]
    else
      render params[:id]
    end
  end

end
