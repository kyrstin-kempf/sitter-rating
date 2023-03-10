class SitterSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :years_of_experience, :hourly_rate, :ratings

  has_many :ratings
end
