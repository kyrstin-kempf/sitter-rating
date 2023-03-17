class SittersController < ApplicationController
   
    # GET /sitters
    def index 
        sitters = Sitter.all 
        render json: sitters 
    end

    # POST /sitters
    def create 
        sitter = Sitter.create!(sitter_params)
        render json: sitter, status: :created 
    end

    private

    def find_sitter
        Sitter.find(params[:id])
    end
    
    def sitter_params
        params.permit(:first_name, :last_name, :email, :years_of_experience, :hourly_rate)
    end

end
