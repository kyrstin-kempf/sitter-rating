class UserSerializer < ActiveModel::Serializer
  attributes :id, :sitters, :first_name, :last_name, :email

  has_many :ratings
  has_many :sitters, through: :ratings
end
