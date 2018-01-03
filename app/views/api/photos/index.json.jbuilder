json.extract! @photos do |photo|
  json.photo.id :id, :title, :description, :image, :author_id, :comment_ids
end
