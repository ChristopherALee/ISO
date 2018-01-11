json.extract! @comment, :id, :photo_id, :author_id, :body
json.authorName @comment.author.username
json.authorProfilePhoto asset_url(@comment.author.profile_photo(:thumb))
