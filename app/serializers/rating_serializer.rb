class RatingSerializer < ActiveModel::Serializer
  attributes :id, :rating, :review, :sitter_id, :user_id

end
