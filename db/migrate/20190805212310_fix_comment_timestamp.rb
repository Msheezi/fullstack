class FixCommentTimestamp < ActiveRecord::Migration[5.2]
  def change
    rename_column :comments, :create_date, :created_at
  end
end
