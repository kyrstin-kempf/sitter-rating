class CreateSitters < ActiveRecord::Migration[6.1]
  def change
    create_table :sitters do |t|
      t.string :name
      t.string :email
      t.integer :years_of_experience
      t.integer :hourly_rate

      t.timestamps
    end
  end
end
