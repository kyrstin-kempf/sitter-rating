class Rating < ApplicationRecord
    belongs_to :user
    belongs_to :sitter
    
    validates :rating, presence: true, length: { in: 0..5 }
end
