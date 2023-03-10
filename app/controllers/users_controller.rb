class UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end
  
  def show 
    # byebug
    render json: @current_user
  end
  
  private
  
  def user_params
    params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end

end

# 17 colelction methods
