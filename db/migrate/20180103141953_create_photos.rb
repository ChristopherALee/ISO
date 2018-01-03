class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.string :title, null: false
      t.text :description
      t.attachment :image
      t.integer :author_id, null: false
      t.string :comment_ids, array: true, default: []
      t.timestamps
    end

    add_index :photos, :author_id
  end
end
