json.extract! @photo, :id, :title, :description, :author_id, :comment_ids
json.authorName @photo.author.username
json.authorProfilePhoto asset_path(@photo.author.profile_photo(:thumb))
json.image_url asset_path(@photo.image.url)
# json.thumbnail asset_path(@photo.image(:thumb))
json.medium_image_url asset_path(@photo.image(:medium))
