# == Schema Information
#
# Table name: galleries
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Gallery < ApplicationRecord
    validates :name, presence: true

    has_many :posts,
    foreign_key: :gallery_id,
    class_name: :Post

    belongs_to :user, optional: true
    foreign_key: :author_id,
    class_name: :User

end
