class Rating < ApplicationRecord
    belongs_to :user
    belongs_to :sitter
    
    validates :rating, presence: true
    validates :review, presence: true
end
