class RatingsController < ApplicationController

    skip_before_action :authorize, only: [:index]


    # GET /ratings
    def index 
        ratings = Rating.all 
        render json: ratings
    end

    # POST /ratings
    def create 
        rating = @current_user.ratings.create!(rating_params) 
        render json: rating, status: :created 
    end

    # PATCH /ratings/:id
    def update 
        rating = find_rating
        rating.update(rating_params) 
        render json: rating
    end

     # DELETE /ratings/:id 
     def destroy 
        rating = find_rating 
        rating.destroy 
        head :no_content 
    end

    private 
    
    def find_rating 
        @current_user.ratings.find(params[:id])
    end
    
    def rating_params
        params.permit(:rating, :review, :sitter_id)
    end

end
