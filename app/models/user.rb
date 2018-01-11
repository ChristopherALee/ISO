# == Schema Information
#
# Table name: users
#
#  id                         :integer          not null, primary key
#  username                   :string           not null
#  password_digest            :string           not null
#  session_token              :string           not null
#  created_at                 :datetime         not null
#  updated_at                 :datetime         not null
#  cover_photo_file_name      :string
#  cover_photo_content_type   :string
#  cover_photo_file_size      :integer
#  cover_photo_updated_at     :datetime
#  profile_photo_file_name    :string
#  profile_photo_content_type :string
#  profile_photo_file_size    :integer
#  profile_photo_updated_at   :datetime
#

class User < ApplicationRecord
  validates :password_digest, :session_token, presence: true
  validates :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true, message: 'Password must be a minimum of 6 characters.' }

  has_attached_file :cover_photo, styles: { medium: '1000x1000>' }, default_url: "https://s3.amazonaws.com/iso-frame-dev/missing_photo_images/placeholder-image-wide.png"
  validates_attachment_content_type :cover_photo, content_type: /\Aimage\/.*\Z/

  has_attached_file :profile_photo, styles: { thumb: '100x100>' }, default_url: "https://s3.amazonaws.com/iso-frame-dev/missing_photo_images/missing_profile_photo.png"
  validates_attachment_content_type :profile_photo, content_type: /\Aimage\/.*\Z/

  validates :username, presence: { message: 'Please enter a username.'}, uniqueness: { message: 'This username has already been taken.'}

  has_many :photos,
    class_name: 'Photo',
    foreign_key: :author_id

  has_many :in_follows,
    class_name: 'Follow',
    foreign_key: :followee_id

  has_many :followers, through: :in_follows, source: :follower

  has_many :out_follows,
    class_name: 'Follow',
    foreign_key: :follower_id

  has_many :followees, through: :out_follows, source: :followee

  has_many :comments,
    class_name: 'Comment',
    foreign_key: :author_id

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    (@user && @user.is_password?(password)) ? @user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
