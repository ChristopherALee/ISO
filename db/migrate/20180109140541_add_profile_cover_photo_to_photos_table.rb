class AddProfileCoverPhotoToPhotosTable < ActiveRecord::Migration[5.1]
  def change
    add_column :photos, :profile_photo, :boolean, default: false
    add_column :photos, :cover_photo, :boolean, default: false
  end
end
