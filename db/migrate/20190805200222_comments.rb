class Comments < ActiveRecord::Migration[5.2]
  def change
     create_table :comments do |t|
      t.integer :post_id, null: false
      t.integer :author_id, null: false
      t.string :body, null: false
      t.datetime :create_date, null: false
    end
    add_index :comments, :post_id
    add_index :comments, :author_id
  end
end
