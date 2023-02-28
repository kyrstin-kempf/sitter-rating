class SittersController < ApplicationController
    skip_before_action :authorize, only: [:index, :show, :destroy]
   
    # GET /sitters
    def index 
        #byebug
        sitters = Sitter.all 
        render json: sitters 
    end

    # GET /sitters/:id
    def show 
        # sitter = find_sitter
        sitter = Sitter.find_by(id: params[:id])
        if sitter 
            render json: sitter
        else 
            render json: { error: 'Sitter not found' }, status: :not_found
        end
    end

    # POST /sitters
    def create 
        sitter = Sitter.create!(sitter_params)
        render json: sitter, status: :created 
    end

    # DELETE /sitters/:id 
    def destroy 
        sitter = find_sitter 
        sitter.destroy 
        head :no_content 
    end

    private

    def find_sitter
        Sitter.find(params[:id])
    end
    
    def sitter_params
        params.permit(:first_name, :last_name, :email, :years_of_experience, :hourly_rate)
    end

end
