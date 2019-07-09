class Api::PostsController < ApplicationController


    def show
        @post = Post.find(params[:id])
        render :show

    end

    def create
        @post = Post.new(post_params)
        
            if @post.save
                render :show
            else
                render json: @post.errors.full_messages, status: 401
            end

    end 

    def index
        @posts = Post.all
        render :index
    end

    def destroy

    end



    private

    def post_params
        params.require(:post).permit(:title, :image_url, :category_id, :author_id, :camera_name, :lens, :f_stop, :shutter_speed, :iso)
    end


end
