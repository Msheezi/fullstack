json.set! @user.id do
json.extract! @user, :id, :username, :first_name, :last_name, :email
end