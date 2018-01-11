json.extract! @photo, :id, :title, :description, :author_id, :comment_ids
# json.comments @photo.comments.pluck(:body)

json.comments do
  json.array! @photo.comments do |comment|
    json.body comment.body
    json.authorName comment.author.username
    json.authorProfilePhoto asset_path(comment.author.profile_photo(:thumb))
  end

end

# json.comments do
#   @photo.comments.each do |comment|
#     json.set! comment.author.username do
#       json.body comment.body
#       json.authorProfilePhoto asset_path(comment.author.profile_photo(:thumb))
#     end
#   end
#
# end
json.authorName @photo.author.username
json.authorProfilePhoto asset_path(@photo.author.profile_photo(:thumb))
json.image_url asset_path(@photo.image.url)
# json.thumbnail asset_path(@photo.image(:thumb))
json.medium_image_url asset_path(@photo.image(:medium))
