class CreateGalleryItems < ActiveRecord::Migration[5.2]
  def change
    create_table :gallery_items do |t|
      t.string :title, null: false
      t.integer :gallery_id, null: false
      t.integer :post_id, null: false
      t.timestamps
    end
    add_index :gallery_items, :gallery_id
    add_index :gallery_items, :post_id
  end
end
