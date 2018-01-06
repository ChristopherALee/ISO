class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render '/api/users/show'
    else
      render json: @user.errors.messages, status: 422
    end
  end

  def show
    @user = User.find_by(username: params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
