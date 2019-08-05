class Api::PostsController < ApplicationController

# skip_before_action :verify_authenticity_token
    def show
        @post = Post.find(params[:id])
        
        render :show

    end

    def create
        
        @post = Post.new(post_params)
        # @post.author_id = current_user.id
        
            if @post.save
                render :show
            else
                render json: @post.errors.full_messages, status: 422
            end

    end 

    def index
        posts = Post.all
         @posts = posts.includes(:comments)
        render :index
    end

    def destroy
        @post = Post.find(params[:id])
        @post.destroy

    render :index

    end



    private

    def post_params
        params.require(:post).permit(:title, :photo, :category_id, :author_id, :camera_name, :lens, :f_stop, :shutter_speed, :iso)
    end


end
