class SessionsController < ApplicationController
#   skip_before_action :authorize, only: :create

  def create   
    if session_params[:email].blank? || session_params[:password].blank?
        render json: { errors: ['Email and password are required'] }, status: :unprocessable_entity
    return
    end

    user = User.find_by(email: session_params[:email])
    puts "Session contains user_id: #{session[:user_id].present?}"
    puts "Session contents: #{session.inspect}"
    # byebug
      if user && user.authenticate(session_params[:password])
        session[:user_id] = user.id 
        render json: user, status: :created 
      else
          render json: { errors: ["Invalid username or password"] }, status: :unauthorized 
      end
  end

  def destroy 
      session.delete :user_id
      puts 'getting me?'
      head :no_content
  end

  private

    def session_params
    params.require(:session).permit(:email, :password)
    end

end
