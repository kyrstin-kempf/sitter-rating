class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
    byebug
      render json: user, status: :created
    else
      byebug
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
  end

  # def show 
  #   user = User.find_by(id: session[:user_id])
  #   if user 
  #     render json: user 
  #   else 
  #     render json: { error: 'Not authorized' }, status: :unauthorized 
  #   end 
  # end

  def destroy 
    session.delete :user_id 
    byebug
    head :no_content
  end

end
