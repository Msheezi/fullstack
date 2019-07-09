# == Schema Information
#
# Table name: posts
#
#  id            :bigint           not null, primary key
#  title         :string           not null
#  image_url     :string
#  category_id   :integer          not null
#  author_id     :integer          not null
#  camera_name   :string
#  lens          :string
#  f_stop        :string
#  shutter_speed :string
#  ISO           :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Post < ApplicationRecord
    validates :title, :category_id, :author_id, presence: true
    has_one_attached :photo

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

    # belongs_to :category, 
    # foreign_key: :category_id,
    # class_name: :Category


end
