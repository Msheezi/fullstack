postIds = user.posts.ids
json.extract! user, :id, :username, :first_name, :last_name, :email, :post_ids
