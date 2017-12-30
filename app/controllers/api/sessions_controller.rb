class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    # debugger
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['Invalid username/password'], status: 402
    end
  end

  def destroy
    if current_user
      logout
    else
      render json: ['No one is logged in!'], status: 404
    end
  end
end
