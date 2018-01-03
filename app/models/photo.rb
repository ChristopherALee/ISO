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
#

class Photo < ApplicationRecord
  validates :title, :author_id, presence: true
  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :user {
    class_name 'user'
    foreign_key :author_id
  }
end
