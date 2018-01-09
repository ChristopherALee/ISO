json.extract! @user, :id, :username
json.photoIds @user.photos.ids
json.followerIds @user.followers.pluck(:username)
json.followingIds @user.followees.pluck(:username)
json.currentUserFollowed Follow.exists?(follower_id: current_user.id, followee_id: @user.id)
json.cover_photo_url asset_path(@user.cover_photo(:medium))
json.cover_photo_url2 asset_path(@user.cover_photo(:original))
json.profile_photo_url asset_path(@user.profile_photo(:thumb))
