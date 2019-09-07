# == Schema Information
#
# Table name: posts
#
#  id            :bigint           not null, primary key
#  title         :string           not null
#  category_id   :integer
#  author_id     :integer          not null
#  camera_name   :string
#  lens          :string
#  f_stop        :string
#  shutter_speed :string
#  iso           :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  desc          :string
#  gallery_id    :integer
#

class Post < ApplicationRecord
    validates :title, :author_id, presence: true
    has_one_attached :photo
    validate :ensure_photo

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

    has_many :comments,
    foreign_key: :post_id,
    class_name: :Comment

    belongs_to :gallery, optional: true,
    foreign_key: :gallery_id,
    class_name: :Gallery

    belongs_to :category, optional: true,
    foreign_key: :category_id,
    class_name: :Category

   

    def ensure_photo
        unless self.photo.attached?
            errors[:photo] << "No Photo Attached"
        end
    end

end
