json.array! @comments do |comment|
    json.extract! comment, :id,:body, :post_id, :author_id, :created_at
end
