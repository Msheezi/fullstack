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

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
