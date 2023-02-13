class User < ApplicationRecord
    has_many :ratings
    has_many :sitters, through: :ratings
    has_secure_password
    

    # validates :password, presence: true
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true, uniqueness: true
end
