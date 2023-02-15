class Sitter < ApplicationRecord
    has_many :ratings
    has_many :users, through: :ratings

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@[^@\s]+\z/ }
    validates :years_of_experience, presence: true, length: { maximum: 65 } 
    validates :hourly_rate, presence: true, length: { maximum: 100 }
end
