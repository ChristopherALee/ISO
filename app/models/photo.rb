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
  has_attached_file :image, styles: { thumb: '100x100>', medium: '800x800>', large: '1000x1000>' }
  validates :title, presence: { message: 'Please enter a title.' }
  validates :image, attachment_presence: { message: 'Please upload a photo' }
  validates :author, presence: true
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id
end
