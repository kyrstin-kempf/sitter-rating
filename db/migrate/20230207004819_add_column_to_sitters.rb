class AddColumnToSitters < ActiveRecord::Migration[6.1]
  def change
    add_column :sitters, :first_name, :string
    add_column :sitters, :last_name, :string
    remove_column :sitters, :name, :string
    remove_column :users, :username, :string
  end
end
