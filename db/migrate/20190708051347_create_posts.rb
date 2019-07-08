class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.string :image_url
      t.integer :category_id, null: false
      t.integer :author_id, null: false
      t.string :camera_name
      t.string :lens
      t.string :f_stop
      t.string :shutter_speed
      t.string :ISO
      t.timestamps
    end
    add_index :posts, :author_id
    add_index :posts, :category_id
  end
end
