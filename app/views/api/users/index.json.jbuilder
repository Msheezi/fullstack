json.array! @users do |user|
    postIds = user.posts.ids
    json.extract! user, :id,:username, :first_name, :last_name,  :post_ids
end
