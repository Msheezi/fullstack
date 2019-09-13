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
end
