class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render '/api/users/show'
    else
      render json: ['Invalid requirements for Username/Password'], status: 422
    end
  end

  def user_params
    debugger
    params.require(:user).permit(:username, :password)
  end
end
