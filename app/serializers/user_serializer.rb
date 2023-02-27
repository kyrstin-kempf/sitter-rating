class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :sitters

  has_many :ratings
  has_many :sitters, through: :ratings
end
