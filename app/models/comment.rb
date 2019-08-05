# == Schema Information
#
# Table name: comments
#
#  id          :bigint           not null, primary key
#  post_id     :integer          not null
#  author_id   :integer          not null
#  body        :string           not null
#  create_date :datetime         not null
#

class Comment < ApplicationRecord
validates :body, presence: true


    belongs_to :post,
    foreign_key: :post_id,
    class_name: :Post

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User



end
