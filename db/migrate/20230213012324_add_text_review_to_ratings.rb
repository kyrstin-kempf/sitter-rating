class AddTextReviewToRatings < ActiveRecord::Migration[6.1]
  def change
    add_column :ratings, :review, :text
  end
end
