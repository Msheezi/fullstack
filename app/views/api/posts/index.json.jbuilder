 json.array! @posts do |post|
 json.extract! post, :id, :title, :category_id, :author_id, :camera_name, :lens, :f_stop, :shutter_speed, :iso, :desc, :gallery_id
    if post.photo.attached?
        json.photoUrl post.photo.service_url 
    else
        json.photoUrl ""
    end




 end