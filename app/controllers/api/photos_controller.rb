class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      render 'api/photos/show'
    else
      render json: ['Cannot upload image'], status: 409
    end
  end

  def show
    @photo = Photo.find_by(id: params[:id])
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
