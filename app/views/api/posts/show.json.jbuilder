json.set! @post.id do
json.extract! @post, :id, :title, :category_id, :author_id, :camera_name, :lens, :f_stop, :shutter_speed, :ISO
end