@users.each do |user|
  json.set! user.username do
    json.extract! user, :id, :username
    json.photoIds user.photos.ids
    json.followerIds user.followers.pluck(:username)
    json.followingIds user.followees.pluck(:username)
    json.currentUserFollowed Follow.exists?(follower_id: current_user.id, followee_id: user.id)
  end
end
