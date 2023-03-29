class SittersController < ApplicationController
    skip_before_action :authorize, only: [:index, :search]
   
    # GET /sitters
    def index 
        sitters = Sitter.all 
        render json: sitters 
    end

    # GET /sitters/search/:term
    def search
        allSitters = Sitter.all
        matchingSitters = allSitters.find_all{ |s| s.first_name.upcase.include?(params[:term].upcase) }
        render json: matchingSitters
    end

    # passing in term to route
    # /sitters/search/sar (sarah, sara, etc.)
    # caps not matter
    # return sitter object (all sitters name matches search not exact)

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
