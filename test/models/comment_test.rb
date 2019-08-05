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

require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
