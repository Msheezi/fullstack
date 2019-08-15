@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :body, :post_id, :author_id, :created_at
    end
end