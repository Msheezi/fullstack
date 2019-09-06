class AddDescGallery < ActiveRecord::Migration[5.2]
  def change 
    add_column :posts, :desc, :string
    add_column :posts, :gallery_id, :integer
  end
end
