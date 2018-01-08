class Api::FollowsController < ApplicationController
  before_action :logged_in?, only: [:index, :create, :destroy]

  def index
    @follows = Follow.all
  end

  def create
    # @follow = Follow.new(follow_params)
    # @follow.follower_id = current_user.id
    @follow = current_user.out_follows.new(follow_params)

    if @follow.save
      @users = [current_user, User.find(follow_params[:followee_id])]
      render 'api/users/follow'
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = current_user.out_follows.find_by!(followee_id: params[:followee_id])
    @follow.destroy

    @user = current_user
    render 'api/users/show'
    # if @follow && @follow.follower_id == current_user.id
    #   @follow.destroy
    # else
    #   render json: @follow.errors.full_messages, status: 403
    # end
  end


  private
  def follow_params
    params.require(:follow).permit(:followee_id)
  end
end
