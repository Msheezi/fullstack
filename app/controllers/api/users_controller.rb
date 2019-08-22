class Api::UsersController < ApplicationController

def new
  @user = User.new
 
end

def index
  @users = User.all 
  # hash = Hash.new([])
  # @users.map do |user|
  #   hash[user.id] = user.posts.ids
  # end
  # hash  this should return object with key user.id and value array of postIds
    render :index
end

def create
  @user = User.new(user_params)
  if @user.save
    login(@user)
    render :show
  else
      render json: @user.errors.full_messages, status: 401
    end
  end


private

def user_params
  params.require(:user).permit(:username, :password, :email, :first_name, :last_name)
end



end
