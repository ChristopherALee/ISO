json.extract! @user, :id, :username
json.photoIds @user.photos.ids
json.followerIds @user.followers.ids
json.followingIds @user.followings.ids
