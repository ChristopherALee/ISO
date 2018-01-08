@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :title, :description, :author_id, :comment_ids
    json.image_url asset_path(photo.image)
    json.thumbnail asset_path(photo.image(:thumbnail))
    json.medium_image_url asset_path(photo.image(:medium))
    json.author photo.author.username
  end
end
