json.extract! @photo, :id, :title, :description, :author_id, :comment_ids
json.authorName @photo.author.username
json.image_url asset_path(@photo.image)
json.thumbnail asset_path(@photo.image(:thumbnail))
json.medium_image_url asset_path(@photo.image(:medium))
