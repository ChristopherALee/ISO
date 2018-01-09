# == Schema Information
#
# Table name: photos
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  description        :text
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  author_id          :integer          not null
#  comment_ids        :string           default([]), is an Array
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  profile_photo      :boolean          default(FALSE)
#  cover_photo        :boolean          default(FALSE)
#

require 'test_helper'

class PhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
