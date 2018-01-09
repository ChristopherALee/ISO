class RemoveProfileCoverPhotoColumnsFromPhotosTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :photos, :profile_photo, :boolean
    remove_column :photos, :cover_photo, :boolean
  end
end
