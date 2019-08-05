
json.extract! @post, :id, :title, :category_id, :author_id, :camera_name, :lens, :f_stop, :shutter_speed, :iso
   if @post.photo.attached?
        json.photoUrl url_for(@post.photo)
    else
        json.photoUrl ""
    end

@post.comments.includes(:author).each do |comment|
    json.comment do 
        json.set! comment.id do
            json.extract comment, :id, :body, :post_id, :author_id, :created_at  
            end
            end
            end 
