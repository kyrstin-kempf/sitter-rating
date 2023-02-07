class Rating < ApplicationRecord
    validates :rating, presence: true, length: { in: 0..5 }

    belongs_to :user
    belongs_to :sitter
end
