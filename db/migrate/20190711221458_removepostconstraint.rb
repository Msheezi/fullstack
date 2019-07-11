class Removepostconstraint < ActiveRecord::Migration[5.2]
  def change
    change_column_null :posts, :category_id, true
  end
end
