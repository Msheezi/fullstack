# == Schema Information
#
# Table name: gallery_items
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  gallery_id :integer          not null
#  post_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class GalleryItem < ApplicationRecord

    belongs_to :gallery,
    foreign_key: :gallery_id,
    class_name: :Gallery 

    belongs_to :post,
    foreign_key: :post_id,
    class_name: :Post
end
