class Change < ActiveRecord::Migration[5.2]
  def change
    rename_column :posts, :ISO, :iso
  end
end
