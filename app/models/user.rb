class User < ApplicationRecord
    has_many :ratings
    has_many :sitters, -> { distinct }, through: :ratings
    
    has_secure_password

    before_save :downcase_email

    validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'Invalid email' }
    validates :first_name, presence: true
    validates :last_name, presence: true

    private

    def downcase_email 
        self.email = email.downcase 
    end

end
