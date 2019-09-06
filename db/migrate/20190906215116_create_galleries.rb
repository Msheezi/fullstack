class CreateGalleries < ActiveRecord::Migration[5.2]
  def change
    create_table :galleries do |t|
      t.string :name, null: false
      t.integer :author_id, null: false
      t.timestamps
    end
    add_index :galleries, :author_id
  end
end
