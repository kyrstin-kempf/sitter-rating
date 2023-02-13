class RatingsController < ApplicationController
    # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    # GET /ratings
    def index 
        ratings = Rating.all 
        render json: ratings
    end

    # POST /ratings
    def create 
        rating = Rating.create(rating_params)
        render json: rating, status: :created 
    end

    # PATCH /ratings/:id
    def update 
        rating = find_rating
        rating.update(rating_params) 
        render json: rating
    end

    private 
    
    def find_rating 
        Rating.find(params[:id])
    end
    
    def rating_params
        params.permit(:rating, :review, :sitter_id, :user_id)
    end
    
    # def render_not_found_response
    #     render json: { error: "Rating not found" }, status: :not_found 
    # end

    # def render_unprocessable_entity_response(invalid)
    #     render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    # end

end
