class ChangeGalleryItemColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :gallery_items, :title
  end
end
