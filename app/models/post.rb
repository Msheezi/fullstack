class Post < ApplicationRecord
    validates :title, :catgory_id, :author_id, presence: true
    has_one_attached :photo

    




end
