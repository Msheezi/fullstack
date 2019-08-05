@post.comments.includes(:author).each do |comment|
    json.comment do 
        json.set! comment.id do
            json.extract comment, :id, :body, :post_id, :author_id, :created_at  
            end
            end
            end 