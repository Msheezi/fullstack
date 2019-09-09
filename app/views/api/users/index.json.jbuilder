json.array! @users do |user|
    
    json.extract! user, :id,:username, :first_name, :last_name, :bgphoto
end
