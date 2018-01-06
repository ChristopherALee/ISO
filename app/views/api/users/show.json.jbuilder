  json.extract! @user, :id, :username
  json.photoIds @user.photos.ids
