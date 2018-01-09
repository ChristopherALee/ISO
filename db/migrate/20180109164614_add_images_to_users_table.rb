class AddImagesToUsersTable < ActiveRecord::Migration[5.1]
  def change
    add_attachment :users, :cover_photo
    add_attachment :users, :profile_photo
  end
end
