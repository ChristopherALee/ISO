class Api::FollowsController < ApplicationController
  before_action :logged_in?, only: [:index, :create, :destroy]

  def index
    @follows = Follow.all
  end

  def create
    @follow = Follow.new(follow_params)

    if current_user.id == @follow.follower_id
      if @follow.save
        render 'api/users/show'
      else
        render json: @follow.errors.full_messages, status: 403
      end
    else
      render json: @follow.errors.full_messages, status: 403
    end
  end

  def destroy
    @follow = Follow.find_by(id: params[:id])

    if @follow && @follow.follower_id == current_user.id
      @follow.destroy
    else
      render json: @follow.errors.full_messages, status: 403
    end
  end


  private
  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end
end
