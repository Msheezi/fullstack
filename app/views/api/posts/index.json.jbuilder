 json.array! @posts do |post|
 json.extract! post, :id, :title, :category_id, :author_id, :camera_name, :lens, :f_stop, :shutter_speed, :ISO
 
 json.image_url url_for(post.photo)

 end