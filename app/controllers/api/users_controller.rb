class Api::UsersController < ApplicationController
  def create
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
