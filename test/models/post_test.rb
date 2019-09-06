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

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
