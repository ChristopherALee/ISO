class Api::PhotosController < ApplicationController
  def create
  end

  def show
  end

  def update
  end

  def destroy
  end

  private
  def photo_params
    params.require(:photo).permit(:title, :image)
  end
end
