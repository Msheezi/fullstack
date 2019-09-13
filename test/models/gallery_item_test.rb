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

require 'test_helper'

class GalleryItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
