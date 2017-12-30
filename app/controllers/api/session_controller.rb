class Api::SessionController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['Invalid username/password'], status: 402
    end
  end

  def destroy
    logout(current_user)
  end
end
