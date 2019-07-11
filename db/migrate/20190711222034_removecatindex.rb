class Removecatindex < ActiveRecord::Migration[5.2]
  def change
    remove_index :posts, column: :category_id
  end
end
