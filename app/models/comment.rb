# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  photo_id   :integer          not null
#  author_id  :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :photo_id, :author_id, :body, presence: true

  belongs_to :photo,
    class_name: 'Photo',
    foreign_key: :photo_id

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id
end
