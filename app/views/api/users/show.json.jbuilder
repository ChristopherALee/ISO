  json.extract! @user, :id, :username
  json.photos @user.photos.ids
