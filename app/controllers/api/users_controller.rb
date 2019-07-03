class Api::UsersController < ApplicationController

def new
  @user = User.new
 
end

def create
  user = User.new(user_params)
  if user.save
    login(user)
    render json
  else
    flash[:errors] = user.errors.full_messages
    render json
  end

end

private

def user_params
  params.require(:user).permit(:username, :password, :email, :first_name, :last_name)
end



end
