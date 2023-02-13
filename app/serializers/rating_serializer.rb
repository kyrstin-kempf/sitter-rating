class RatingSerializer < ActiveModel::Serializer
  attributes :id, :rating, :review, :sitter_id, :user_id

  belongs_to :sitter
  belongs_to :client
end
