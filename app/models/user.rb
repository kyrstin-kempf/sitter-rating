class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true
    validates :password_digest, presence: true
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true, uniqueness: true

    has_many :ratings
    has_many :sitters, through: :ratings
end
